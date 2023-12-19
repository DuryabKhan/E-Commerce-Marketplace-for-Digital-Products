import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assests delivered to your email in seconds and own them right away",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "for the palanet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flec flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality{" "}
            <span className="text-blue-600">digital</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground ml-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dicta
            delectus consequuntur sequi, beatae rerum. Dicta, voluptates
            perferendis nostrum quasi laudantium molestiae natus deleniti!
            Dolorem impedit error deserunt ad ex?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 align-center justify-center">
            <Link href="/products" className={buttonVariants()}>
              Browse Products
            </Link>
            <Button variant="ghost">Our Quality Standards &rarr;</Button>
          </div>
        </div>

        {/* list products here */}
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-cente"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900 text-center">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground text-center">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
