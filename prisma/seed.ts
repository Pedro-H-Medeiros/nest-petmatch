import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  // Seed for ONGs
  await prisma.ong.createMany({
    data: [
      {
        id: '8e8c10bb-f1ea-45be-8d4a-cd4b569f00ad',
        name: 'ONG Hope',
        description: 'Helping animals find a new home',
        image_user: 'http://example.com/ong1.jpg',
        image_urls: [
          'http://example.com/ong1-1.jpg',
          'http://example.com/ong1-2.jpg',
        ],
      },
      {
        id: 'b28b40c6-d09f-4f8c-b6b7-5dd0a3d3c740',
        name: 'ONG PetCare',
        description: 'Dedicated to animal rescue and care',
        image_user: 'http://example.com/ong2.jpg',
        image_urls: [
          'http://example.com/ong2-1.jpg',
          'http://example.com/ong2-2.jpg',
        ],
      },
      {
        id: 'd780e6a3-0f6a-4814-8535-fc8e79b1c198',
        name: 'ONG AnimalFriend',
        description: 'Protecting and supporting animals in need',
        image_user: 'http://example.com/ong3.jpg',
        image_urls: [
          'http://example.com/ong3-1.jpg',
          'http://example.com/ong3-2.jpg',
        ],
      },
      {
        id: 'bc9e69a4-f52b-4b77-a0ba-dc9e0c7f5cd2',
        name: 'ONG PetLovers',
        description: 'Providing care and shelter for stray animals',
        image_user: 'http://example.com/ong4.jpg',
        image_urls: [
          'http://example.com/ong4-1.jpg',
          'http://example.com/ong4-2.jpg',
        ],
      },
    ],
  })

  // Seed for Users
  await prisma.user.createMany({
    data: [
      {
        id: '5754e750-90c8-40e2-9ef5-7af19b456f44',
        name: 'USER ADMIN',
        email: 'useradmin@example.com',
        cpf: '123.456.789-01',
        phone: '1234567891',
        password:
          '$2a$06$4LcvJPF8F4yKU2tmxDG09O6HBdmgIMfjoZ3CwgGk1alVFj3HmANGW',
        image_url: 'http://example.com/user1.jpg',
        role: 'ADMIN',
        ong_id: '8e8c10bb-f1ea-45be-8d4a-cd4b569f00ad',
      },
      {
        id: 'f7a4467e-7426-4319-b247-f42aad5a1ff5',
        name: 'USER MEMBER',
        email: 'usermember@example.com',
        cpf: '123.456.789-02',
        phone: '1234567892',
        password:
          '$2a$06$4LcvJPF8F4yKU2tmxDG09O6HBdmgIMfjoZ3CwgGk1alVFj3HmANGW',
        image_url: 'http://example.com/user2.jpg',
        role: 'MEMBER',
        ong_id: 'b28b40c6-d09f-4f8c-b6b7-5dd0a3d3c740',
      },
      {
        id: '04963559-0bbc-4496-8538-f8a9a3a5a245',
        name: 'USER ONG ADMIN',
        email: 'userongadmin@example.com',
        cpf: '123.456.789-03',
        phone: '1234567893',
        password:
          '$2a$06$4LcvJPF8F4yKU2tmxDG09O6HBdmgIMfjoZ3CwgGk1alVFj3HmANGW',
        image_url: 'http://example.com/user3.jpg',
        role: 'ONG_ADMIN',
        ong_id: 'd780e6a3-0f6a-4814-8535-fc8e79b1c198',
      },
      {
        id: 'c1ec11e1-e1f5-40cf-86eb-cc8ae51dc0ce',
        name: 'USER',
        email: 'user@example.com',
        cpf: '123.456.789-04',
        phone: '1234567894',
        password:
          '$2a$06$4LcvJPF8F4yKU2tmxDG09O6HBdmgIMfjoZ3CwgGk1alVFj3HmANGW',
        image_url: 'http://example.com/user4.jpg',
        role: 'USER',
        ong_id: 'bc9e69a4-f52b-4b77-a0ba-dc9e0c7f5cd2',
      },
    ],
  })

  // Seed for Pets
  await prisma.pet.createMany({
    data: [
      {
        id: 'a1e5be4b-8740-4cbf-8c70-8821f7c66de7',
        ong_id: '8e8c10bb-f1ea-45be-8d4a-cd4b569f00ad',
        name: 'Buddy',
        age: new Date('2020-06-15'),
        sex: 'Male',
        race: 'Golden Retriever',
        color: 'Golden',
        image_urls: ['http://example.com/buddy1.jpg'],
      },
      {
        id: 'bc98e1d8-5ed9-4d14-a350-22fbcfae1a2c',
        ong_id: 'b28b40c6-d09f-4f8c-b6b7-5dd0a3d3c740',
        name: 'Bella',
        age: new Date('2019-01-20'),
        sex: 'Female',
        race: 'Beagle',
        color: 'Tricolor',
        image_urls: ['http://example.com/bella1.jpg'],
      },
      {
        id: '33e7f938-77e5-4f23-aaba-903dc8bde4fb',
        ong_id: 'd780e6a3-0f6a-4814-8535-fc8e79b1c198',
        name: 'Max',
        age: new Date('2021-11-10'),
        sex: 'Male',
        race: 'Bulldog',
        color: 'White',
        image_urls: ['http://example.com/max1.jpg'],
      },
      {
        id: '11be4c89-75e8-4eb2-bb8d-4b5fda1ef8a6',
        ong_id: 'bc9e69a4-f52b-4b77-a0ba-dc9e0c7f5cd2',
        name: 'Lucy',
        age: new Date('2020-08-22'),
        sex: 'Female',
        race: 'Labrador',
        color: 'Yellow',
        image_urls: ['http://example.com/lucy1.jpg'],
      },
    ],
  })

  // Seed for Adoptions
  await prisma.adoption.createMany({
    data: [
      {
        id: 'f58ff6aa-60e7-4ae6-92d7-b72c64e2e926',
        user_id: '5754e750-90c8-40e2-9ef5-7af19b456f44',
        pet_id: 'a1e5be4b-8740-4cbf-8c70-8821f7c66de7',
        adopted_at: new Date('2023-02-15'),
      },
      {
        id: '5d9ad7c3-8f32-48d4-89a6-8a4b2d6eb5d9',
        user_id: 'f7a4467e-7426-4319-b247-f42aad5a1ff5',
        pet_id: 'bc98e1d8-5ed9-4d14-a350-22fbcfae1a2c',
        adopted_at: new Date('2023-03-01'),
      },
      {
        id: '83eaf4de-00b9-4fc7-9eb7-913fbcba58a4',
        user_id: '04963559-0bbc-4496-8538-f8a9a3a5a245',
        pet_id: '33e7f938-77e5-4f23-aaba-903dc8bde4fb',
        adopted_at: new Date('2023-05-10'),
      },
      {
        id: '3348a12b-2cb3-4443-8f26-3d5f647fcf3e',
        user_id: 'c1ec11e1-e1f5-40cf-86eb-cc8ae51dc0ce',
        pet_id: '11be4c89-75e8-4eb2-bb8d-4b5fda1ef8a6',
        adopted_at: new Date('2023-07-20'),
      },
    ],
  })
}

seed()
  .then(() => {
    prisma.$disconnect()
    console.log('Database seeded!')
  })
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
  })
