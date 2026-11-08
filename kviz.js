// Pictures are in assets/images/
const RECIPES = [
  {
    name: "Bramborovo zeleninový koláč",
    picture: "bramborovo_zeleninovy_kolac.webp"
  },
  {
    name: "Carpaccio roláda",
    picture: "carpaccio_rolada.webp"
  },
  {
    name: "Chřestové rizoto",
    picture: "chrestove_rizoto.webp"
  },
  {
    name: "Cuketové zelí",
    picture: "cuketove_zeli.webp"
  },
  {
    name: "Domácí salámová pizza",
    picture: "domaci_salamova_pizza.webp"
  },
  {
    name: "Dýňovo-kokosový koláč",
    picture: "dynovo_kokosovy_kolac.webp"
  },
  {
    name: "Guláš starého vozky",
    picture: "gulas_stareho_vozky.webp"
  },
  {
    name: "Houbová placka",
    picture: "houbova_placka.webp"
  },
  {
    name: "Houby zapečené v moučné placce s česnekovým krémem",
    picture: "houby_zapecene_v_moucne_placce_s_cesnekovym_kremem.webp"
  },
  {
    name: "Hráškový tatarák",
    picture: "hraskovy_tatarak.webp"
  },
  {
    name: "Hrušková polévka",
    picture: "hruskova_polevka.webp"
  },
  {
    name: "Jarní salát s kozím sýrem",
    picture: "jarni_salat_s_kozim_syrem.webp"
  },
  {
    name: "Kedlubnová polévka",
    picture: "kedlubnova_polevka.webp"
  },
  {
    name: "Královský tatarák",
    picture: "kralovsky_tatarak.webp"
  },
  {
    name: "Křupavá vepřová pečínka s lepenicí",
    picture: "krupava_veprova_pecinka_s_lepenici.webp"
  },
  {
    name: "Kuře v pikantní paprikové omáčce",
    picture: "kure_v_pikantni_paprikove_omacce.webp"
  },
  {
    name: "Kuřecí koktejl",
    picture: "kureci_koktejl.webp"
  },
  {
    name: "Květákové plátky na česneku na paprikové zelenině",
    picture: "kvetakove_platky_na_cesneku_na_paprikove_zelenine.webp"
  },
  {
    name: "Letní kuřecí salát",
    picture: "letni_kureci_salat.webp"
  },
  {
    name: "Losos zapečený s rajčaty v krustě",
    picture: "losos_zapeceny_s_rajcaty_v_kruste.webp"
  },
  {
    name: "Neptunův talíř",
    picture: "neptunuv_talir.webp"
  },
  {
    name: "Nožičky na uherský způsob",
    picture: "nozicky_na_uhersky_zpusob.webp"
  },
  {
    name: "Opečený sýrový knedlík",
    picture: "opeceny_syrovy_knedlik.webp"
  },
  {
    name: "Paella s mořskými plody dle Aťky Dvořákové",
    picture: "paella_s_morskymi_plody_dle_atky_dvorakove.webp"
  },
  {
    name: "Pikantní bramborová placka",
    picture: "pikantni_bramborova_placka.webp"
  },
  {
    name: "Pikantní kuřecí maso na víně v domácí tortille",
    picture: "pikantni_kureci_maso_na_vine_v_domaci_tortille.webp"
  },
  {
    name: "Pikantní špekáčkový salát",
    picture: "pikantni_spekackovy_salat.webp"
  },
  {
    name: "Plněná bramborová koule",
    picture: "plnena_bramborova_koule.webp"
  },
  {
    name: "Pohanková kaše se sušenými švestkami a medem",
    picture: "pohankova_kase_se_susenymi_svestkami_a_medem.webp"
  },
  {
    name: "Pstruh s mandlovou krustou a salát z červené řepy",
    picture: "pstruh_s_mandlovou_krustou_a_salat_z_cervene_repy.webp"
  },
  {
    name: "Roštěná dle smíchovského sládka",
    picture: "rostena_dle_smichovskeho_sladka.webp"
  },
  {
    name: "Rychlý houbový krém",
    picture: "rychly_houbovy_krem.webp"
  },
  {
    name: "Rychlý masový koláč",
    picture: "rychly_masovy_kolac.webp"
  },
  {
    name: "Skopové mleté čufty s lilkem",
    picture: "skopove_mlete_cufty_s_lilkem.webp"
  },
  {
    name: "Smažená cuketa plněná mozzarelou",
    picture: "smazena_cuketa_plnena_mozzarelou.webp"
  },
  {
    name: "Smažené banány s medem",
    picture: "smazene_banany_s_medem.webp"
  },
  {
    name: "Sýr panýr opečený na rajčatech s cuketou",
    picture: "syr_panyr_opeceny_na_rajcatech_s_cuketou.webp"
  },
  {
    name: "Sýrový salát",
    picture: "syrovy_salat.webp"
  },
  {
    name: "Teplý cuketový salát",
    picture: "teply_cuketovy_salat.webp"
  },
  {
    name: "Teplý salát ze zeleného chřestu",
    picture: "teply_salat_ze_zeleneho_chrestu.webp"
  },
  {
    name: "Těstoviny na lesnický způsob",
    picture: "testoviny_na_lesnicky_zpusob.webp"
  },
  {
    name: "Texaské chilli",
    picture: "texaske_chilli.webp"
  },
  {
    name: "Topinkový teplý salát",
    picture: "topinkovy_teply_salat.webp"
  },
  {
    name: "Trhanec z hlívy",
    picture: "trhanec_z_hlivy.webp"
  },
  {
    name: "Vejce na majonézových bramborách",
    picture: "vejce_na_majonezovych_bramborach.webp"
  },
  {
    name: "Vepřový bůček dle pana Kužela",
    picture: "veprovy_bucek_dle_pana_kuzela.webp"
  },
  {
    name: "Zapečená rýže s kuřetem a houbami po balkánsku",
    picture: "zapecena_ryze_s_kuretem_a_houbami_po_balkansku.webp"
  },
  {
    name: "Zapečené prokládané brambory se špenátem",
    picture: "zapecene_prokladane_brambory_se_spenatem.webp"
  },
  {
    name: "Zapečený pórek",
    picture: "zapeceny_porek.webp"
  },
  {
    name: "Zdravá zeleninová pánev s čočkou",
    picture: "zdrava_zeleninova_panev_s_cockou.webp"
  }
]

// Videos are in assets/video/
// INTRO_VIDEO plays before the first recipe, OUTRO_VIDEO after the last one.
// VIDEOS play shuffled between recipes. When there are fewer videos than gaps, they repeat.
const INTRO_VIDEO = "intro.mp4"
const OUTRO_VIDEO = "outro.mp4"
const VIDEOS = [
  "alobal.mp4",
  "babicka.mp4",
  "bagetka.mp4",
  "bambus.mp4",
  "cesnek.mp4",
  "cibule.mp4",
  "cimicuri.mp4",
  "deti.mp4",
  "dostupny.mp4",
  "forek.mp4",
  "holky.mp4",
  "hruskovice.mp4",
  "jalapenos.mp4",
  "kladivo.mp4",
  "knedliky.mp4",
  "koruna.mp4",
  "krem.mp4",
  "krupnout.mp4",
  "kurkuna.mp4",
  "meloun.mp4",
  "merunky.mp4",
  "minimalne.mp4",
  "mouka.mp4",
  "napiju.mp4",
  "nashledanou.mp4",
  "nesetris.mp4",
  "olej.mp4",
  "pivinko.mp4",
  "pivo_vino.mp4",
  "pizza.mp4",
  "pohrby.mp4",
  "pracuje.mp4",
  "priroda.mp4",
  "prsa.mp4",
  "roh.mp4",
  "rolada.mp4",
  "rum.mp4",
  "shakshuka.mp4",
  "skakani.mp4",
  "smetanka.mp4",
  "spenat.mp4",
  "stribro.mp4",
  "strizlivej.mp4",
  "leknete_se.mp4",
  "vypijem.mp4",
  "vyraboval.mp4",
  "vytahuji.mp4",
  "wow.mp4",
  "zeleninka.mp4"
]

// Sounds are in assets/audio/. One of them plays after each correct answer, in shuffled order.
const SOUNDS = [
  "desgustovat.mp3",
  "diana.mp3",
  "jdeme_dal.mp3",
  "masakr.mp3",
  "nevidel.mp3",
  "ochutnat.mp3",
  "poejsejirko.mp3",
  "poejsenato.mp3",
  "polykam_naprazdno.mp3",
  "prekvapil.mp3",
  "preziti.mp3",
  "primo_do_misy.mp3",
  "slintam.mp3",
  "svacina.mp3",
  "tak_to_ma_bejt.mp3"
]

let game
// Number of recipes in one part. The player chooses it on the start screen.
let partSize = 25
// Plays the sounds after a correct answer.
const sound = new Audio()
// Plays the clips. While the player answers, it loads the next clip, so that the clip starts without a black screen.
const video = document.querySelector("#video")
// Set while a clip plays. Calling it ends the clip at once.
let skipVideo = null

function shuffle(array) {
  return array.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

function show(screenId) {
  for (const screen of document.querySelectorAll("body > section")) {
    screen.hidden = screen.id !== screenId
  }
  // On a small screen the player scrolls. Each new screen must start at the top.
  window.scrollTo(0, 0)
}

// Ends the game at once: stops the sound and shows the start screen.
function goToStart() {
  game = null
  sound.pause()
  loadVideo(INTRO_VIDEO)
  show("start-screen")
}

function leaveGame() {
  if (confirm("Ukončit kvíz a vrátit se na začátek?")) {
    goToStart()
  }
}

function choosePartSize(size) {
  partSize = size
  for (const button of document.querySelectorAll("#part-size button")) {
    button.setAttribute("aria-pressed", String(Number(button.dataset.size) === size))
  }
}

// One game can have more parts. Each part takes the next recipes from the same shuffled list,
// so that no recipe shows two times in one game.
function startGame() {
  game = {
    recipes: shuffle(RECIPES),
    videos: shuffle(VIDEOS),
    sounds: [],
    index: 0,
    part: 0,
    totalCorrect: 0
  }
  startPart()
  playVideo(INTRO_VIDEO, showQuestion)
}

function startPart() {
  game.part += 1
  game.partStart = game.index
  game.partEnd = Math.min(game.index + partSize, game.recipes.length)
  game.partCorrect = 0
  document.querySelector("#question-screen").classList.toggle("many-choices", partSize > 25)
  prepareRecipe()
}

// Gives the clip before the recipe at index (not the first recipe), or null when there are no clips.
function clipBefore(index) {
  return game.videos.length > 0 ? game.videos[(index - 1) % game.videos.length] : null
}

// Plays the clip before the recipe at game.index.
function playClip() {
  const path = clipBefore(game.index)
  if (path) {
    playVideo(path, showQuestion)
  } else {
    showQuestion()
  }
}

// Starts to load the clip into the video element. It does nothing when the clip is already there.
function loadVideo(path) {
  const src = `assets/video/${path}`
  if (video.getAttribute("src") !== src) {
    video.src = src
  }
}

function playVideo(path, onDone) {
  let finished = false
  // A missing or broken video must not stop the game, so it is skipped.
  const done = (failed) => {
    if (finished) return
    finished = true
    skipVideo = null
    if (failed) {
      console.warn(`Video assets/video/${path} nelze přehrát, přeskakuji.`)
    }
    video.onended = video.onerror = null
    video.pause()
    onDone()
  }
  const skip = () => done(true)

  skipVideo = () => done(false)
  video.onended = () => done(false)
  video.onerror = skip
  loadVideo(path)
  // The same clip can play again, or the player can skip it, so it must start from the beginning.
  video.currentTime = 0
  show("video-screen")
  video.play().catch(skip)
}

// Fill the hidden question screen while the clip plays, so that the picture is ready when the clip ends.
function prepareRecipe() {
  const recipe = game.recipes[game.index]
  const picture = document.querySelector("#recipe-picture")
  picture.src = `assets/images/${recipe.picture}`
  picture.decode().catch(() => { })

  const partRecipes = game.recipes.slice(game.partStart, game.partEnd)
  const progress = `recept ${game.index - game.partStart + 1} z ${partRecipes.length}`
  // The part number is useful only when the game can have more than one part.
  document.querySelector("#progress").textContent = partSize < game.recipes.length
    ? `${game.part}. část – ${progress}`
    : progress[0].toUpperCase() + progress.slice(1)

  // The names of the part stay in the same place for the whole part. Names of recipes already shown are disabled.
  const usedNames = new Set(game.recipes.slice(game.partStart, game.index).map(recipe => recipe.name))
  const partNames = partRecipes.map(recipe => recipe.name).sort((a, b) => a.localeCompare(b, "cs"))
  document.querySelector("#choices").replaceChildren(...partNames.map(name => {
    const button = document.createElement("button")
    button.textContent = name
    button.onclick = () => answer(name)
    if (usedNames.has(name)) {
      button.disabled = true
      button.classList.add("used")
    }
    return button
  }))
}

function showQuestion() {
  show("question-screen")
  const next = game.index + 1
  const path = next >= game.recipes.length ? OUTRO_VIDEO : clipBefore(next)
  if (path) {
    loadVideo(path)
  }
}

function answer(name) {
  const correctName = game.recipes[game.index].name
  if (name === correctName) {
    game.partCorrect += 1
    game.totalCorrect += 1
    playSound()
  }

  for (const button of document.querySelectorAll("#choices button")) {
    button.disabled = true
    if (button.textContent === correctName) {
      button.classList.add("correct")
    } else if (button.textContent === name) {
      button.classList.add("wrong")
    }
  }

  const next = document.querySelector("#next")
  next.hidden = false
  next.focus()
}

// Plays the sounds in shuffled order. When all were played, it shuffles them again.
function playSound() {
  if (SOUNDS.length === 0) return
  if (game.sounds.length === 0) {
    game.sounds = shuffle(SOUNDS)
    // The last sound of one round must not also be the first sound of the next round.
    if (game.sounds.length > 1 && game.sounds[0] === game.lastSound) {
      game.sounds.push(game.sounds.shift())
    }
  }
  const path = game.sounds.shift()
  game.lastSound = path
  sound.src = `assets/audio/${path}`
  // A missing or broken sound must not stop the game.
  sound.play().catch(() => console.warn(`Zvuk assets/audio/${path} nelze přehrát.`))
}

function nextStep() {
  // A second click (for example a double click) must not skip a recipe.
  const next = document.querySelector("#next")
  if (next.hidden) return
  next.hidden = true
  // The sound must not play over the next clip.
  sound.pause()
  game.index += 1

  // The outro plays only after the last part, when no recipes are left.
  if (game.index >= game.recipes.length) {
    playVideo(OUTRO_VIDEO, showScore)
    return
  }
  if (game.index >= game.partEnd) {
    showScore()
    return
  }

  prepareRecipe()
  playClip()
}

function showScore() {
  const left = game.recipes.length - game.index
  document.querySelector("#score-title").textContent = left > 0 ? `Konec ${game.part}. části` : "Konec kvízu"
  document.querySelector("#score").textContent =
    `Správně ${game.partCorrect} z ${game.partEnd - game.partStart}`
  const total = document.querySelector("#total")
  total.hidden = game.part === 1
  total.textContent = `Celkem ${game.totalCorrect} z ${game.index}`
  const continueButton = document.querySelector("#continue")
  continueButton.hidden = left === 0
  show("score-screen")
    ; (left > 0 ? continueButton : document.querySelector("#back")).focus()
}

function continueGame() {
  // A second click (for example a double click) must not start a part two times.
  if (document.querySelector("#score-screen").hidden) return
  startPart()
  playClip()
}

for (const button of document.querySelectorAll("#part-size button")) {
  button.onclick = () => choosePartSize(Number(button.dataset.size))
}
loadVideo(INTRO_VIDEO)
document.querySelector("#start").onclick = startGame
document.querySelector("#continue").onclick = continueGame
document.querySelector("#back").onclick = goToStart
document.querySelector("#home").onclick = leaveGame
document.querySelector("#next").onclick = nextStep
// On a touch screen there is no Escape key, so the video screen has a button for it.
document.querySelector("#skip").onclick = () => skipVideo && skipVideo()
// Escape skips the clip. Players are not likely to press it by accident.
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && skipVideo) {
    skipVideo()
  }
})
