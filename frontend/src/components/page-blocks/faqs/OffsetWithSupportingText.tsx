import { IFaqs } from ".";

export default function OffsetWithSupportingText(props: IFaqs) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {props.title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{props.description}</p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {props.faqs.map((faq, index) => (
                <div key={index}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    {faq.title}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {faq.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
