export default function Newsletter() {
  return (
    <section className="h-96 px-6 flex justify-center border">
      <div className="max-w-2xl text-center bg-white h-full flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-serif font-semibold mb-4">
          ¡Suscríbete a nuestro email!
        </h2>

        <p className="text-gray-600 mb-8">
          Forma parte de nuestra comunidad y recibe antes que nadie nuestras
          novedades, promociones especiales y eventos exclusivos de Posto
          Design.
        </p>

        <div className="border border-gray-300 flex items-center justify-between p-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Correo"
            className="flex-1 px-3 py-2 outline-none"
          />

          <button className="bg-black text-white px-6 py-2">Suscribirse</button>
        </div>
      </div>
    </section>
  );
}
