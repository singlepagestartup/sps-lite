import { IFaqs } from ".";

export default function SideBySide(props: IFaqs) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {props.title}
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {props.faqs.map((faq, index) => (
              <div
                key={index}
                className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt className="text-base font-medium text-gray-900 md:col-span-5">
                  {faq.title}
                </dt>
                <dd className="mt-2 md:col-span-7 md:mt-0">
                  <p className="text-base text-gray-500">{faq.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
