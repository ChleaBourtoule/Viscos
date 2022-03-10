import React from "react";

import Estaing from "../../assets/estaing.jpg";
import Parc from "../../assets/parc.jpg";
import Donjon from "../../assets/donjon.jpg";
import Chlorophil from "../../assets/chlorofil.jpg";
import Isaby from "../../assets/isaby.jpg";
import Cascade from "../../assets/cascade.jpg";
import Nuages from "../../assets/nuages.jpg";
import Viscos from "../../assets/photo1.jpg";
import Lac from "../../assets/lac.jpg";

const Region = ({ lang }) => {
  const title = {
    fr: `La Région`,
    en: `The Region`,
    nl: `De Regio`,
  };

  const images = [
    {
      name: Cascade,
    },
    {
      name: Nuages,
    },
    {
      name: Viscos,
    },
    {
      name: Lac,
    },
  ];

  const section = {
    estaing: {
      title: {
        fr: `Le lac d'Estaing`,
        en: `Le Lac d'Estaing (Estaing Lake)`,
        nl: `Le Lac d'Estaing (meer van Estaing)`,
      },
      text: {
        fr: `Le lac d'Estaing est accessible par la route, depuis Argelès-Gazost, prendre la D 918 puis la D 103 à Arras-en-Lavedan en direction d'Estaing et continuer jusqu'au lac d'Estaing.

        Altitude : 1160m. Massif : Vallée d'Estaing. Départ : Accès voiture été comme hiver.`,
        en: `Estaing lake is accessible by road from Argelès-Gazost: take the D 918 and the D 103 at Arras-en-Lavedan towards Estaing, then proceed to the lake.

        Altitude : 1160m. Accessible by car all year long.`,
        nl: `Het meer van Estaing is bereikbaar via de weg vanuit Argelès-Gazost: neem de D 918 en de D 103 bij Arras-en-Lavedan richting Estaing en ga dan verder naar het meer.

        Hoogte : 1160m. Bereikbaar met de auto het hele jaar door.`,
      },
    },
    parc: {
      title: {
        fr: `Le parc Animalier des Pyrénées`,
        en: `Parc Animalier des Pyrénées (The Pyrenean Wildlife Park)`,
        nl: `Parc Animalier des Pyrénées (het natuurpark van de Pyreneeën)`,
      },
      text: {
        fr: `Le Parc Animalier des Pyrénées est situé au pays des ours, au cœur même de la chaîne Pyrénéenne. Il présente les animaux de cette région dans de vastes espaces où, ours, loups, isards, marmottes, mouflons, chevreuils, loutres, écureuils évoluent en semi-liberté.

        Depuis 1999, date de sa création, le Parc Animalier des Pyrénées n’a pas recherché la constitution de la plus riche collection animalière possible. Son choix s’est porté sur une nouvelle formule de parc animalier qui vous offre la possibilité de partager l’intimité des animaux tout en conservant leurs comportements naturels. Cette vocation s’est maintenue au fil des ans et le parc n’a cessé de grandir. Aujourd’hui plus d’une dizaine d’espèces d’animaux se partagent un territoire de plusieurs hectares sur le flanc de la colline qui surplombe la vallée et s’ouvre vers la haute montagne.`,
        en: `Situated at the heart of the bears' territory, this park shelters local animals in vast areas. Bears, wolves, izards, beavers, mouflons, ibex, otters, squirrels, live there in semi-free range.

        Since 1999, when it was founded, le Parc Animalier des Pyrénées has always intended to form the richest collection of animals. Its choices have been motivated by a new park formula that gives the opportunity to share animals private life while preserving their natural instincts. This purpose has remained through the years though the park was growing. Today, dozens of species share a territory of several acres on the slope of the hills that overhang Argelès-Gazost.`,
        nl: `Dit park, gelegen in het hart van het berengebied, herbergt lokale dieren in uitgestrekte gebieden. Beren, wolven, hagedissen, bevers, moeflons, steenbokken, otters, eekhoorns, leven daar in semi-vrije uitloop.

        Sinds 1999, toen het werd opgericht, heeft het Parc Animalier des Pyrénées altijd de bedoeling gehad om de rijkste verzameling dieren te vormen. De keuzes zijn gemotiveerd door een nieuwe parkformule die de mogelijkheid biedt om het privéleven van dieren te delen met behoud van hun natuurlijke instincten. Dit doel is door de jaren heen gebleven hoewel het park groeide. Tegenwoordig delen tientallen soorten een gebied van enkele hectares op de helling van de heuvels die over Argelès-Gazost hangen.`,
      },
    },
    donjon: {
      title: {
        fr: `Le Donjon des Aigles`,
        en: `Le Donjon des Aigles (Eagles' Donjon)`,
        nl: `Le Donjon des Aigles (Eagles Donjon)`,
      },
      text: {
        fr: `Le château de Beaucens, dans les Hautes Pyrénées, abrite une des plus prestigieuses collections de rapaces : Milans, Vautours, Aigles, Pygargues, Faucons et Buses côtoient les Perroquets en été. Sur fond musical, un spectacle de toute beauté riche en émotion à découvrir des vacances de Printemps à la fin septembre. Accèssible à pied depuis le camping.`,
        en: `The castle of Beaucens, shelters one of the richest collection of birds of prey : Kites, Vultures, Eagles, Sea Eagles, Falcons, Buzzards, and Parrots. Discover a wonderful and emotional show with music and the castle as background. Openned from April to September. Reachable on foot from the campsite.`,
        nl: `Het kasteel van Beaucens herbergt een van de rijkste verzameling roofvogels: wouwen, gieren, adelaars, zeearenden, valken, buizerds en papegaaien. Ontdek een prachtige en emotionele show met muziek en het kasteel als achtergrond. Geopend van april tot september. Te voet bereikbaar vanaf de camping.`,
      },
    },
    chlorophil: {
      title: {
        fr: `Le Parc Chlorofil`,
        en: `Chlorofil Park`,
        nl: `Chlorofil Park`,
      },
      text: {
        fr: `Parc accrobatique forestier situé à Argeles-Gazost. Ouvert de mars à novembre dans une superbe forêt de 3ha. Ce parc propose plus de 200 activités, les premiers parcours en temre de difficulté sont ouverts aux enfants à partir de 4 ans.`,
        en: `Treetop adventure course situated in Argeles-Gazost in a 6 acres splendid forest. More than 200 activities are available and the easiest courses are opened to 4 y.o. children. Opened from March to November.`,
        nl: `Treetop avonturenparcours gelegen in Argelès-Gazost in een prachtig bos van 2 hectare. Er zijn meer dan 200 activiteiten beschikbaar en de gemakkelijkste cursussen staan ​​open voor 4 jaar. kinderen. Geopend van maart tot november.`,
      },
    },
    hautacam: {
      title: {
        fr: `Hautacam`,
        en: `Hautacam`,
        nl: `Hautacam`,
      },
      text: {
        fr: `Le Hautacam est un espace privilégié pour découvrir la montagne toute l’année.

        Station de sports d'hiver, le Hautacam est aussi une montagne de loisirs l’été et propose de nombreuses activités sportives, de détente et de contemplation. En été vous pourrez effectuer une randonnée, un parcours de VTT, ou encore du parapente. L'hiver vous profiterez des activités du domaine skiable : ski alpin, ski de fond, raquettes à neige, luge.
        
        Le Hautacam, une montagne facile et accessible qui se découvre tout en douceur, dans un cadre pyrénéen de rêve.`,
        en: `Hautacam is a privileged place to discover mountain all year long.

        Hautacam is both a winter sports resort and the best place to delight in mountain during summer. It offers various activities such as a roller-coaster, hiking, mountain bike, paragliding, and is a great place to rest and contemplate the landscape.
        
        Hautacam, is an easy and accessible mountain you can gently discover in the wonderful Pyrenean landscape.`,
        nl: `Hautacam is een bevoorrechte plek om het hele jaar door de bergen te ontdekken.

        Hautacam is zowel een wintersportoord als de beste plek om in de zomer van de bergen te genieten. Het biedt verschillende activiteiten, zoals een achtbaan, wandelen, mountainbiken, paragliden, en het is een geweldige plek om uit te rusten en het landschap te aanschouwen.
        
        Hautacam, is een gemakkelijke en toegankelijke berg die u rustig kunt ontdekken in het prachtige landschap van de Pyreneeën.`,
      },
    },
    other: {
      title: {
        fr: `Et aussi...`,
        en: `And also...`,
        nl: `En ook...`,
      },
      text: {
        fr: `Le lac des gaves, la Brêche de Rolland, Gavarnie, tous les grands cols cyclistes (Soulor, Aubisque Tourmalet...)`,
        en: `Le lac des gaves (Gaves' Lake), la Brêche de Rolland (Rolland's Breach), Gavarnie, and all the great passes (Soulor, Aubisque Tourmalet...)`,
        nl: `Le lac des gaves (meer van Gaves), la Brêche de Rolland (Breach van Rolland), Gavarnie en alle grote passen (Soulor, Aubisque Tourmalet...)`,
      },
    },
  };
  return (
    <div className="region">
      <h2 className="region__title">{title[lang]}</h2>
      <hr className="region__hr" />
      <div className="region__content">
        <div className="region__content__section">
          <div className="region__content__section__txt">
            <h3 className="region__content__section__txt__title">
              {section.estaing.title[lang]}
            </h3>
            <p className="region__content__section__txt__p">
              {section.estaing.text[lang]}
            </p>
          </div>
          <div className="region__content__section__image">
            <img src={Estaing} alt="estaing" />
          </div>
        </div>
        <div className="region__content__section reverse">
          <div className="region__content__section__txt reverseTxt">
            <h3 className="region__content__section__txt__title">
              <a href="http://www.parc-animalier-pyrenees.com">
                {section.parc.title[lang]}
              </a>
            </h3>
            <p className="region__content__section__txt__p">
              {section.parc.text[lang]}
            </p>
          </div>
          <div className="region__content__section__image">
            <img src={Parc} alt="parc" />
          </div>
        </div>
        <div className="region__content__section">
          <div className="region__content__section__txt">
            <h3 className="region__content__section__txt__title">
              <a href="http://www.donjon-des-aigles.com">
                {section.donjon.title[lang]}
              </a>
            </h3>
            <p className="region__content__section__txt__p">
              {section.donjon.text[lang]}
            </p>
          </div>
          <div className="region__content__section__image">
            <img src={Donjon} alt="parc" />
          </div>
        </div>
        <div className="region__content__section reverse">
          <div className="region__content__section__txt reverseTxt">
            <h3 className="region__content__section__txt__title">
              <a href="http://www.chlorofil-parc.com">
                {section.chlorophil.title[lang]}
              </a>
            </h3>
            <p className="region__content__section__txt__p">
              {section.chlorophil.text[lang]}
            </p>
          </div>
          <div className="region__content__section__image">
            <img src={Chlorophil} alt="parc" />
          </div>
        </div>
        <div className="region__content__section">
          <div className="region__content__section__txt">
            <h3 className="region__content__section__txt__title">
              <a href="http://www.hautacam.com">
                {section.hautacam.title[lang]}
              </a>
            </h3>
            <p className="region__content__section__txt__p">
              {section.hautacam.text[lang]}
            </p>
          </div>
          <div className="region__content__section__image">
            <img src={Isaby} alt="parc" />
          </div>
        </div>
        <div className="region__content__other">
          <h3 className="region__content__other__title">
            {section.other.title[lang]}
          </h3>
          <p className="region__content__other__p">
            {section.other.text[lang]}
          </p>
          <div className="region__content__other__images">
            {images.map((image) => {
              return (
                <img
                  className="region__content__other__images__img"
                  src={image.name}
                  alt={image.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Region;
