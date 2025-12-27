import Image from "next/image";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  onClick: () => void;
};

const ProductCard = ({
  image,
  title,
  description,
  price,
  onClick,
}: ProductCardProps) => {
  return (
    <div className="bg-[#f2e1f3ff] rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={500}
        className="w-full h-48 object-cover"
      />
      <div
        onClick={onClick}
        className="bg-[#f2e1f3ff] p-4 cursor-pointer hover:scale-105 transition text-left"
      >
        <h3 className="font-semibold text-black/75 text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-orange-500 font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
