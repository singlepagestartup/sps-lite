import { IFaqs } from "types";
export default function TwoColumnsOnDark(props: IFaqs) {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-50">
          {props.title}
        </h2>
        <p className="mt-4 text-base text-gray-100">{props.description}</p>
        <div className="mt-12">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
            {props.faqs.map((faq, index) => (
              <div key={index}>
                <dt className="text-lg font-medium leading-6 text-gray-50">
                  {faq.title}
                </dt>
                <dd className="mt-2 text-base text-gray-100">
                  {faq.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
