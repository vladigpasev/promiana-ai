
const features = [
  {
    name: 'Много лесно и интуитивно',
    description:
      'Времето е най-ценният ресурс. Разгледайте статтите и създайте своя собствена само с един клик, без акаунт.',
  },
  {
    name: 'Проверена информация',
    description:
      'С помощта на ботове и нашият екип от експерти, който постоянно проверява информацията, можете да сте уверени в достоверността ѝ.',
  },
  {
    name: 'Поддръжка 24 часа',
    description:
      'Свържете се с нас по всяко време на денонощието и ние ще бъдем готови да ви помогнем с всякакви технически въпроси или доклади по статиите.',
  },
  {
    name: 'Напълно безплатно',
    description:
      'Нашата платформа е напълно безплатна за всички потребители, можете да създавате и разглеждате статии само с един клик.',
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Бъди информиран</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Каква е нашата цел?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Досега в България няма друга платформа за последни новини, свързани с технологичното развитие. С помощта на нашата платформа, можете да бъдете в течение с най-новите иновации.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary p-2">
                  <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon> </g></svg>
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
