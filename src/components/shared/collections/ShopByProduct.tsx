import Image from "next/image";
import Link from "next/link";


export default function ShopByProduct({ title, collections }) {
  return (
    <section className="py-[32px] px-[16px]">
      <h2 className="text-[36px] text-[#1c2e36] font-[700] text-center uppercase">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-auto mt-[30px]">
        {collections.map((collection) => (
          <Link
            key={collection.handle}
            href={`/collections/${collection.handle}`}
            className="relative group overflow-hidden"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300" />
            <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-[28px] p-[15px] text-center uppercase">
              {collection.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
