# SPS frontend components

Read this contract before changing a production frontend variant or reviewing
its client/server composition. It governs model and relation variants under
`libs/modules` and their composition in Host.

## Reuse the component template

Inspect a neighboring variant of the same kind and the applicable generator
template under
`tools/plugins/sps-generator-plugin/src/coder/root/libs/modules/[module]/`.
Keep its `index.tsx` and shared parent contract. The parent owns SDK selection,
record loading, Provider, Suspense and error handling where that template
provides them.

For ordinary saved-record variants, bind the model SDKs and renderer to
`@sps/shared-frontend-components/singlepage/default`. Use the existing
`subject-default`, `find` or form template when its data contract applies.
Implement the view in `Component.tsx` and its interactive controls in an
optional `ClientComponent.tsx`.

A visual or interaction change does not justify copying shared readers into
local `client.tsx`/`server.tsx`, adding another Provider around the same reader,
or modifying shared loading code. Existing specialized variants retain their
applicable template; their local readers are not a reason to give every view
another loading layer.

## Explicit props at the client boundary

Keep `Component.tsx` server-compatible. Hooks, browser APIs and mutable UI state
belong in `ClientComponent.tsx`. At the JSX boundary between them, select public
UI props explicitly:

```tsx
export function Component(props: IComponentPropsExtended) {
  return <ClientComponent isServer={props.isServer} variant={props.variant} data={props.data} className={props.className} children={props.children} />;
}
```

The example's `children` is a rendered React node. Select only fields required
by the actual view; omit props that its interface does not declare.

Do not forward `{...props}`, a spread alias or a rest object from a shared
reader into a Client Component. Runtime props can include `api`, `clientApi`,
`serverApi`, `Provider`, `Component` and `Skeleton` constructors even when the
view's TypeScript interface does not list them. Destructuring these fields into
another object or casting that object does not make its functions serializable.
SDK bindings and reader implementation props stay inside their owning template.

Public event handlers are passed between components already executing in the
client subtree. Ordinary callbacks created on the server cannot cross into a
Client Component. Existing explicit Server Actions follow their own contract;
they do not make SDK objects or render callbacks valid boundary props.

## JSX slots for composition

A server parent can compose a server-rendered element and pass the resulting
React node into a Client Component:

```tsx
<ClientPanel toolbar={<ServerToolbar data={data} />} />
```

The client renders `toolbar` as a node. It does not import or invoke
`ServerToolbar`, call a server component as an ordinary function, or receive
`renderToolbar={() => <ServerToolbar data={data} />}` from the server.

Render callbacks such as the shared `find` variant's children are valid when
the producer and consumer execute on the same side of the boundary. Resolve a
server callback there before passing JSX to a client view; create client render
callbacks inside the client subtree.

Inside a file marked `"use client"`, nested SPS model and relation components
declared in that file use `isServer={false}`. A server composer must cross into
that client view through JSX first. Setting `isServer={false}` on a model
wrapper from a server composer does not by itself establish a safe boundary.

## Implementation and review checks

- Compare the changed variant's wrapper with its applicable template and check
  whether Provider and loading ownership are duplicated.
- Trace the runtime props reaching each Client Component, including objects
  added by a parent reader. Check every ordinary function prop's producer and
  consumer, and verify that slots carry nodes rather than server render callbacks.
- For a boundary regression, exercise the public component through its real
  shared reader. Verify loaded data and the absence of SDK bindings in the
  client view props. A test that calls only the visual component skips that path.
- Run the relevant type checks and tests, then open the affected Host route and
  exercise its controls. Inspect browser and server errors for serialization,
  hydration and server/client import failures. Dev-server `Ready`, HTTP 200 or
  a TypeScript pass alone does not establish successful RSC rendering.

Record the verified route and behavior, or the concrete runtime verification
gap. A reviewer reports a violation with its triggering path and consequence
under the review workflow's evidence rules.
