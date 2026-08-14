export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            LogistiCRM
          </h1>
          <p className="text-xl text-blue-700 mb-8">
            CRM-система для управления грузоперевозками
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Добро пожаловать!
            </h2>
            <p className="text-gray-600">
              Система помогает автоматизировать учёт клиентов, заявок, статусы перевозок и генерировать отчёты.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                Войти
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition">
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
