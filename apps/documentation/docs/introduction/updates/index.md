---
sidebar_position: 2
---

# Getting updates

Updating the Single Page Startup codebase is done by requesting updates from the upstream repository, which was installed in the [Creating project](/docs/introduction/installation) step.

To do this, you need to call the command:

```bash
git pull upstream main
```

### Error: hint: You have divergent branches and need to specify how to reconcile them.

If you receive the error `hint: You have divergent branches and need to specify how to reconcile them.` during `git pull`, you need to execute the command:

```bash
git config pull.rebase false
```

## Merge conflicts

Then there may be a need to solve merge conflicts, which usually occur when the backend model schema is changed or the types that are the main generics in root components are modified. Usually, it all comes down to accepting both changes.

```jsx
git checkout --theirs "./backend/src/api/**/seeds/*.json"
```

## Many merge conflicts

This issue can also occur if Husky was not launched before starting work on a freshly downloaded project from GitHub, and a problem related to project linting arose.
