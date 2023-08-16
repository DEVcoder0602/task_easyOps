import Link from "next/link";
import ListingCard from "./ListingCard";

const HomeListing = () => {
  return (
    <div>
      <h1 className="text-2xl">All Customers</h1>
      <div className="flex flex-wrap justify-evenly">
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
      <Link
        href="/addCustomer"
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Add Customer
      </Link>
    </div>
  );
};

export default HomeListing;
