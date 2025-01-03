import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Detail{
  id: string,
  author: string,
  name: string,
  image:string,
  heading:string,
  contenttext:string
}

const story_detail:Detail[] = [
  {
    id: "the_lottery",
    author: "Shirley Jackson",
    name: "The Lottery",
    image: "/blogImg/peacevillage.jpg",
    heading: "A small town holds an annual lottery with a shocking and sinister conclusion.",
    contenttext: "The Lottery by Shirley Jackson is a chilling short story that takes place in a seemingly idyllic small town. The townsfolk gather annually for a lottery, which at first appears to be a harmless tradition. However, as the story unfolds, it becomes clear that the lottery has a dark and violent purpose: the selection of one individual to be sacrificed in a brutal ritual. Through its shocking climax and understated narration, the story critiques blind adherence to tradition and the collective capacity for violence hidden within ordinary communities"
  },
  {
    id: "tell_tale_heart",
    author: "Edgar Allan Poe",
    name: "The Tell-Tale Heart",
    image: "/blogImg/tellheart.jpg",
    heading: "A chilling tale of guilt and madness, told from the perspective of an unreliable narrator.",
    contenttext:"The Tell-Tale Heart by Edgar Allan Poe is a gripping tale of madness and guilt narrated by an unnamed character. Obsessed with the vulture-like eye of an old man, the narrator meticulously plans and executes his murder, hiding the body beneath the floorboards. Despite the apparent success of the crime, the narrator’s mind unravels as he begins to hear the relentless sound of a beating heart, growing louder and more unbearable. The story climaxes with the narrator's confession, driven by his torment and inability to escape the echoes of his own guilt."},
  {
    id: "good_man",
    author: "Flannery O'Connor",
    name: "A Good Man is Hard to Find",
    image: "/blogImg/freeroad.jpg",
    heading: " A family road trip turns dark as they encounter a mysterious and dangerous criminal.",
    contenttext: "A Good Man is Hard to Find by Flannery O'Connor is a gripping tale about a family’s ill-fated road trip that explores themes of morality, grace, and redemption. The story follows a grandmother who reluctantly joins her son’s family on a vacation. Along the way, her manipulations lead them down a desolate road where they encounter a group of criminals led by a man known as The Misfit"
  },
   
  {
    id: "harrison_bergeron",
    author: "Kurt Vonnegut",
    name: "Harrison Bergeron",
    image: "/blogImg/disable.jpg",
    heading: "A dystopian future where equality is enforced at the expense of individuality",
    contenttext: "Harrison Bergeron by Kurt Vonnegut is a satirical dystopian short story set in a future where the government enforces strict equality by handicapping those with natural talents, beauty, or intelligence. In this society, citizens wear weights, masks, or distracting devices to ensure no one is superior to anyone else. The story follows Harrison, a 14-year-old boy of extraordinary abilities, who rebels against this oppressive system"
  },
  {
    id: "yelloewallpaper",
    author: "Charlotte Perkins Gilman",
    name: "The Yellow Wallpaper",
    image: "/blogImg/wallpaper.jpg",
    heading: "A womans descent into madness as she fixates on the patterns in her bedroom wallpaper.",
    contenttext: "The Yellow Wallpaper by Charlotte Perkins Gilman is a haunting short story that explores themes of mental illness, gender roles, and the oppressive nature of societal norms. The narrative is presented through the journal entries of a woman diagnosed with a nervous condition and confined to a room by her physician husband."
  },
  {
    id: "giftmagi",
    author: "O. Henry",
    name: "The Gift of the Magi",
    image: "/blogImg/giftmagi.jpeg",
    heading: "A heartwarming story of love and sacrifice as a couple exchange Christmas gifts.",
    contenttext: "The Gift of the Magi by O. Henry is a poignant tale of love and selflessness. It tells the story of a young couple, Della and Jim, who are deeply in love but financially struggling. As Christmas approaches, each wants to give the other a meaningful gift. Della sells her long, beautiful hair to buy a platinum fob chain for Jim’s cherished pocket watch, while Jim sells his watch to buy ornate combs for Della’s hair."
  }
    ];

const Blog = () => {
  return (
   <>
   <div className="mt-8 w-[95%]">
        <div className="text-center mb-0">
          <h1 className="text-4xl mt-0 font-bold text-[#005073]">BLOGS</h1>
          <h2 className="text-2xl text-gray-600 mt-2">
                    Discover captivating stories that inspire, entertain, and spark your imagination.
          </h2>
        </div>
</div>
    <section className="mt-4">
      <div className="container  mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {story_detail.map((data) => (
            <div key={data.id} className="p-4">
              <div className="bg-[#005073] h-full  rounded-lg overflow-hidden transform transition-all sm:hover:scale-105 sm:hover:shadow-2xl">
                <Link href={`/blog/${data.id}`}>
                  <span>
                    <Image
                      className="lg:h-56 w-full transform transition-all hover:scale-105 hover:shadow-lg"
                      width={300}
                      height={300}
                      src={data.image}
                      alt="image"
                    />
                  </span>
                </Link>
                <div className="px-6 py-8 text-white">
                  <h1 className="tracking-wide text-2xl title-font font-bold mb-1">
                    {data.name}
                  </h1>
                  <p className="leading-relaxed mb-4">{data.heading}</p>
                  <div className="flex items-center flex-wrap">
                    <Link href={`/blog/${data.id}`}>
                      <button className="text-[#005073] font-semibold bg-white hover:bg-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        Read Story
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  )
}

export default Blog
