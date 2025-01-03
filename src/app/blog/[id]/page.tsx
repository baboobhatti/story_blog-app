'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Comment from './comment';
// import React, { useState } from 'react'

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
  const  Story =  () => {
  // const  { id } =  params;
  const param = useParams()
  console.log(param.id);
  const id = param.id
  
  // console.log(id);
  const story = story_detail.find((data) => data.id === id);
  if (!story) {
    return <h1>Product not found</h1>; // Handle case where product doesn't exist
  }

  return (
    <>
    <div className='mt-10'>
      <div className='w-[90%] lg:w-[900px] xl:w-[1100px] 2xl:w-[1400px] mb-6 mx-auto text-2xl sm:text-3xl md:text-4xl font-semibold bg-[#005073] text-center py-6 text-white'>{story.name}</div>
      
      <div className='w-[90%] lg:w-[900px] xl:w-[1100px] 2xl:w-[1400px] mx-auto flex flex-col-reverse md:flex-row '>
      <div className='md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px] xl:w-[500px] xl:h-[400px]'><Image className="w-full h-full" src={story.image} alt={story.name} width={440} height={440} /></div>
      <div className='md:w-[500px]'>
        <h1 className='md:ml-4  md:mt-12 lg:mt-24 text-xl sm:text-2xl md:text-3xl font-semibold '>{story.heading}</h1>
        <h1 className='md:ml-4 mt-2 md:mt-10 text-lg sm:text-2xl md:text-2xl font-semibold italic'><span className='not-italic'>Author : </span>{story.author}</h1>
      </div>  
      </div>
      <div className='w-[90%] lg:w-[900px] text-justify xl:w-[1000px] 2xl:w-[1200px] mt-4 mx-auto text-xl sm:text-2xl md:text-3xl f'><span className='italic'>{`Story: ${story.name}`}</span><br /><br /> {story.contenttext}</div>     
    </div>

    {/* Comment Section */}
    <Comment />
    </>
  )
}

export default Story
