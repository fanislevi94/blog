import { PrismaClient } from '@prisma/client'
import {links} from '../pages/data/link'
const prisma = new PrismaClient()
async function main() {
 await prisma.projects.create({
    data:{
        imageUrl:"./our-news.jpg",
        category:"ournews",
        title:"Papaki had a dynamic presence at the eCommerce & Digital Marketing Expo 2023 ",
        description:"Papaki, supporting the eCommerce and business community, was present this year as…",
        user: {
            connect: {
              id:1,
            },
          }
    },
    
 })
 await prisma.projects.create({
    data:{
        imageUrl:"./our-news.jpg",
        category:"ournews",
        title:"Notification for an incident of unauthorized access to our systems",
        description:"As you have probably already been informed in detail by an email…",
        user: {
            connect: {
              id:1,
            },
          }
    },
 })

 await prisma.projects.create({
  data:{
      imageUrl:"./our-news.jpg",
      category:"ournews",
      title:"WordCamp Europe celebrated 20 years of WordPress in Athens!",
      description:"If you have a website, eShop, or blog, you are a developer…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})

await prisma.projects.create({
  data:{
      imageUrl:"./our-news.jpg",
      category:"ournews",
      title:"Papaki celebrated National Customer Service Week 2022",
      description:"Papaki participated for the 6th year in a row in National Customer…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})


await prisma.projects.create({
  data:{
      imageUrl:"./our-news.jpg",
      category:"ournews",
      title:".eu Web Awards 2022: Vote for the best .eu websites",
      description:".eu Web Awards were held for the 9th year in a row,…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})

await prisma.projects.create({
  data:{
      imageUrl:"./our-news.jpg",
      category:"ournews",
      title:"MultiHosting joins the Enartia Group family",
      description:"Enartia (Papaki, Top.Host), part of team.blue, the Europe’s leading supplier of digital…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})
await prisma.projects.create({
  data:{
      imageUrl:"./our-news.jpg",
      category:"ournews",
      title:"WordCamp Athens 2022: Together again!",
      description:"This year at the great celebration of the Greek WordPress community, we…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})

await prisma.projects.create({
  data:{
      imageUrl:"./our-news.jpg",
      category:"ournews",
      title:"WordCamp Athens 2022: Together again!",
      description:"This year at the great celebration of the Greek WordPress community, we…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})

await prisma.projects.create({
  data:{
      imageUrl:"./domain.jpg",
      category:"domains",
      title:"The trends in domain name registrations for 2022",
      description:"What are the trends in domain registration for 2022? Is the domain…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})

await prisma.projects.create({
  data:{
      imageUrl:"./domain.jpg",
      category:"domains",
      title:"How to protect your brand with domain registration",
      description:"In the past few days, a news item was published about the… ",
      user: {
          connect: {
            id:1,
          },
        }
  },
})

await prisma.projects.create({
  data:{
      imageUrl:"./domain.jpg",
      category:"domains",
      title:"Do new domains impact SEO? Solving the mystery",
      description:"First impressions count. When it comes to your website, your domain name…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})

await prisma.projects.create({
  data:{
      imageUrl:"./domain.jpg",
      category:"domains",
      title:"Participate at the .eu Web Awards and make your website popular!",
      description:"If you have a .eu website and you are looking for interesting…",
      user: {
          connect: {
            id:1,
          },
        }
  },
})



}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })