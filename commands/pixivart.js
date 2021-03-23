const Discord = require("discord.js");
const PixivApi = require('pixiv-api-client');
const pixiv = new PixivApi();
const pixivImg = require('pixiv-img');
const mvdir = require('mvdir');
const del = require('del');

module.exports.run = async (bot, message, args) => {
  const word = args.join(" ");
  if (!word) {
    return message.channel.send(`Darling, specific what to search for.`)
  }

  async function art(word) {
    await pixiv.login('user_nkxp5532', 'Skyfactroy3', true)
    let store = await search(word)
    let randomIndex = Math.floor(Math.random() * store.length);
    let array = store[randomIndex]
    if (!array) {
      return illusts = "false";
    }
    let link = array.two
    return {
      one: array.one,
      two: link
    }
  }


  async function search(word) {
    let json1 = await pixiv.searchIllust(word)
    const data1 = json1.illusts
    let store1 = data1.map(val => ({ one: val.id, two: val.image_urls.large }))
    if (json1.next_url) {
      let store2;
      let further1 = await searchfurther(json1.next_url).catch(error => console.log(error));
      store1 = await store1.concat(further1.store1)
      if (further1.store2.next_url) {
        let further2 = await searchfurther(further1.store2.next_url)
        console.log(further2)
        store1 = await store1.concat(further2.store1)
      }
    }

    return store1
  }

  async function searchfurther(json) {
    let jsonfurther = await pixiv.requestUrl(json);
    const datafurther = jsonfurther.illusts
    let storefurther = datafurther.map(val => ({ one: val.id, two: val.image_urls.large }))
    if (jsonfurther.next_url) {
      return {
        store1: storefurther,
        store2: jsonfurther
      }

    }
    return {
      store1: storefurther
    }
  }

  async function dlink(url) {
    let name = await pixivImg(url)
    return name
  }

  async function move() {
    let array = await art(word)
    if(array == "false") {
      return illusts = "false"
    }
    let name = await dlink(array.two)
    await mvdir(`${name}`, `Tempimage/${name}`);
    return {
      one: array.one,
      two: name
    }
  }


  async function attach() {
    let art = await move()
    if(art == "false") {
      return message.channel.send("Darling, could not find any art")
    }
    let array = {
      one: art.one,
      two: art.two,
    }
    await embed(array)
    await del([`./Tempimage/${array.two}`]);

  }

  async function embed(array) {


    const file = await new Discord.MessageAttachment(`./Tempimage/${array.two}`);

    let botembed = await new Discord.MessageEmbed()
      .setColor("#ff0fef")
      .setDescription(`Sauce: https://www.pixiv.net/en/artworks/${array.one}`)
      .attachFiles(file)
      .setImage(`attachment://${array.two}`)

    await message.channel.send(botembed).catch(console.error)
  }
  attach()

}

module.exports.help = {
  name: "pixivart"
}
