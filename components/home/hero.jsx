import Link from "next/link";
import MarkdownIt from "markdown-it";
import data from "../../lib/data";
import Icon from "../icon";

const md = new MarkdownIt({ html: true });

export default function HomeHero({ block, dataBinding }) {
  return (
    <section className="hero-two" data-cms-bind={dataBinding}>
      <ul className="grid grid-cols-4 gap-4 px-16">
        {data.katelog.items.map((item, index) => (
          <li
            key={index}
            className="relative overflow-hidden bg-white rounded-lg shadow-lg overflow dark:bg-base-800 "
          >
            <div>
              <figure >
                <img
                  src="https://web-katalog.superego.website/wp-content/uploads/2023/08/640x320-Github-Cover-1.png"
                  alt=""
                />
              </figure>
            </div>
            <ol className="p-5 pb-0 ">
              {Object.entries(item).map(([key, value]) => {
                if (key !== "liveLink" && key !== "designLink" ) {
                    return <li key={key}>{value}</li>;
                }
                return null; // Skip liveLink and designLink in the dynamic loop
            })}
              <div className="flex gap-0.5 -mx-12 pt-3">
                {item.liveLink && (
                       <div className={`w-full basis-1/2 text-center bg-gray-500 text-white ${!item.designLink && 'basis-full'}`}>
                       <Link className="px-4 py-2" href={item.liveLink}>Live site</Link>
                  </div>
                )}
                {item.designLink && (
                    <div className={`w-full basis-1/2 text-center bg-gray-500 text-white ${!item.liveLink && 'basis-full'}`}>
                        <Link className="w-full h-full px-4 py-2" href={item.designLink}>Design</Link>
                    </div>
                )}
              </div>
            </ol>
          </li>
        ))}
      </ul>
    </section>
  );
}
