<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Artist;

class ArtistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $artists = [
            [
                'nom_groupe' => 'The White Stripes',
                'type_musique' => 'Rock',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/whitestripes.jpg',
                'description' => 'The White Stripes est un duo rock emblématique formé en 1997 à Détroit, Michigan. Composé de Jack White (chant, guitare) et 
                Meg White (batterie), le groupe est reconnu pour son style minimaliste et brut, mélangeant des influences de garage rock, punk, blues et country. 
                Leur esthétique visuelle distinctive, basée sur une palette de couleurs rouge, blanche et noire, ainsi que leur son unique, ont rapidement captivé 
                le public. Parmi leurs plus grands succès, on compte des titres comme "Seven Nation Army", "Fell in Love with a Girl" et "Icky Thump". 
                Avec six albums studio acclamés par la critique, The White Stripes ont laissé une empreinte indélébile sur la scène musicale internationale avant 
                de se séparer en 2011. Leur musique continue d influencer de nombreux artistes et à enchanter les fans du monde entier.',
            ],
            [
                'nom_groupe' => 'Royal Republic',
                'type_musique' => 'Rock',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/royalrepublic.jpg',
                'description' => 'Royal Republic est un groupe de rock suédois formé en 2007 à Malmö. Composé d Adam Grahn (chant, guitare), Hannes Irengård (guitare), Jonas Almén (basse) et 
                Per Andreasson (batterie), le groupe se distingue par son énergie explosive et ses performances scéniques captivantes. Leur musique allie habilement des 
                éléments de rock, punk et garage, avec une touche de pop accrocheuse. Connus pour des titres comme "Tommy-Gun", "Full Steam Spacemachine" et "Baby", 
                Royal Republic a rapidement gagné en popularité grâce à leur son dynamique et leurs refrains entraînants. Avec plusieurs albums à leur actif, 
                dont "Weekend Man" et "Club Majesty", le groupe continue de conquérir les scènes internationales et de séduire un large public avec leur style unique et leur 
                charisme indéniable.',
            ],
            [
                'nom_groupe' => 'Shaka Ponk',
                'type_musique' => 'Rock',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/shakaponk.jpg',
                'description' => 'Shaka Ponk est un groupe de rock français fondé en 2004 par Frah (chant) et CC (guitare). Mêlant rock, punk, électro et hip-hop,
                    le groupe se distingue par son univers déjanté, ses performances scéniques spectaculaires et son esthétique visuelle unique. Avec des titres comme "My Name is Stain", 
                    "Palabra Mi Amor" et "Wanna Get Free", Shaka Ponk a su conquérir un large public en France et à l étranger. Leur musique énergique et leurs textes engagés 
                    résonnent auprès d une génération en quête de liberté et d authenticité. Avec plusieurs albums à succès, dont "The Geeks and the Jerkin Socks" et "The Evol", 
                    Shaka Ponk continue de repousser les limites du rock et de l électro, offrant à son public des expériences uniques et inoubliables.',
            ],
            [
                'nom_groupe' => 'The Offspring',
                'type_musique' => 'Punk-Rock',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/offspring.jpg',
                'description' => 'The Offspring est un groupe de punk rock américain formé en 1984 à Garden Grove, en Californie. Composé de Dexter Holland (chant, guitare),
                    Noodles (guitare), Greg K. (basse) et Pete Parada (batterie), le groupe est connu pour ses riffs accrocheurs, ses mélodies entraînantes et ses paroles 
                    souvent teintées d humour et de sarcasme. Avec des tubes comme "Self Esteem", "Pretty Fly (for a White Guy)" et "The Kids Aren t Alright", The Offspring 
                    a marqué toute une génération et conquis un large public à travers le monde. Leur son énergique et leur attitude rebelle en ont fait l un des groupes 
                    les plus emblématiques de la scène punk rock. Avec des albums cultes comme "Smash" et "Americana", The Offspring'

            ],
            [
                'nom_groupe' => 'Within Temptation',
                'type_musique' => 'Metal Symphonique',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/withintemptation.jpg',
                'description' => 'Within Temptation est un groupe de metal symphonique néerlandais formé en 1996 à Waddinxveen. Mené par la chanteuse Sharon den Adel et le guitariste 
                    Robert Westerholt, le groupe est connu pour ses compositions épiques, mêlant riffs puissants, orchestrations grandioses et voix en
                    voûtantes. Avec des titres comme "Ice Queen", "Stand My Ground" et "Paradise (What About Us?)", Within Temptation a su conquérir un large public'
            ],
            [
                'nom_groupe' => 'Apashe',
                'type_musique' => 'Electro',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/apashe.jpg',
                'description' => 'Apashe est un producteur et DJ belge de musique électronique, connu pour son mélange unique de dubstep, trap, neurofunk et musique classique. 
                    Avec des titres comme "Good News", "Majesty" et "No Twerk", Apashe a su se démarquer par son style novateur et ses productions de haute qualité. 
                    Ses performances scéniques dynamiques et ses collaborations avec des artistes renommés en ont fait l un des acteurs majeurs de la scène électronique 
                    internationale.'
            ],
            [
                'nom_groupe' => 'The Chemical Brothers',
                'type_musique' => 'Electro',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/chemicalbrother.jpg',
                'description' => 'The Chemical Brothers est un duo de musique électronique britannique formé en 1989 à Manchester. Composé de Tom Rowlands et Ed Simons, 
                    le groupe est connu pour ses compositions innovantes, mêlant house, techno, breakbeat et rock. Avec des titres comme "Block Rockin Beats"'
            ],
            [
                'nom_groupe' => 'Bad Omens',
                'type_musique' => 'Metalcore',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/badomens.jpg',
                'description' => 'Bad Omens est un groupe de metalcore américain formé en 2015 à Los Angeles. Composé de Noah Sebastian (chant), Joakim Karlsson (guitare), 
                    Nicholas Ruffilo (guitare), Nick Folio (basse) et Nick Glassen (batterie), le groupe est connu pour ses riffs puissants, ses mélodies sombres et ses 
                    paroles introspectives. Avec des titres comme "The Worst in Me", "Limits" et "Dethrone", Bad Omens a su se démarquer sur la scène metalcore internationale'
            ],
            [
                'nom_groupe' => 'The Avener',
                'type_musique' => 'Electro',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/theavener.jpg',
                'description' => 'The Avener est un producteur et DJ français de musique électronique, connu pour ses remixes et compositions originales mêlant deep house, 
                    nu-disco et pop. Avec des titres comme "Fade Out Lines", "Castle in the Snow" et "Beautiful", The Avener a su conquérir un large public en France et à l étranger'
            ],
            [
                'nom_groupe' => 'Ghost',
                'type_musique' => 'Metal',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/ghost.jpg',
                'description' => 'Ghost est un groupe de metal suédois formé en 2006 à Linköping. Mené par le chanteur Tobias Forge, le groupe est connu pour son esthétique 
                    visuelle théâtrale, ses compositions sombres et mélodiques, et ses paroles souvent teintées d humour noir. Avec des titres comme "Rats", "Cirice" et "Square Hammer", 
                    Ghost a su conquérir un large public et se tailler une place de choix sur la scène metal internationale'
            ],

            [
                'nom_groupe' => 'Gorillaz',
                'type_musique' => 'Rock',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/gorillaz.jpg',
                'description' => 'Gorillaz est un groupe virtuel britannique créé en 1998 par Damon Albarn et Jamie Hewlett. Composé de personnages animés, dont 2-D, Murdoc Niccals, 
                    Noodle et Russel Hobbs, le groupe mêle rock, hip-hop, électro et pop pour créer un son unique et éclectique. Avec des titres comme "Clint Eastwood", "Feel Good Inc" 
                    et "On Melancholy Hill", Gorillaz a su conquérir un large public et se démarquer par son univers visuel original et ses collaborations avec des artistes de renom. 
                    Leur musique, souvent teintée de messages politiques et sociaux, résonne auprès d une génération en quête de sens et d ouverture d esprit.'
            ],

            [
                'nom_groupe' => 'Mass Hysteria',
                'type_musique' => 'Metal',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/masshysteria.jpg',
                'description' => 'Mass Hysteria est un groupe de metal français formé en 1993 à Paris. Composé de Mouss Kelai (chant), Yann Heurtaux (guitare), 
                    Frédéric Duquesne (guitare), Olivier Cariou (basse) et Raphaël Mercier (batterie), le groupe est connu pour ses riffs puissants, ses textes engagés 
                    et ses performances scéniques explosives. Avec des titres comme "Furia", "L Enfer des Dieux" et "Vae Soli", Mass Hysteria a su conquérir un large public 
                    en France et à l étranger, devenant l un des piliers de la scène metal hexagonale.'
            ],

            [
                'nom_groupe' => 'Orelsan',
                'type_musique' => 'Rap',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/orelsan.jpg',
                'description' => 'Orelsan est un rappeur et acteur français né en 1982 à Alençon. Révélé en 2009 avec son premier album "Perdu d Avance", le rappeur a su 
                    imposer son style décalé, ses textes incisifs et son flow percutant sur la scène rap française. Avec des titres comme "La Terre est Ronde", "Basique" 
                    et "Tout va bien", Orelsan a su conquérir un large public et devenir l un des artistes les plus emblématiques de sa génération. Son univers, souvent teinté 
                    d humour et de mélancolie, résonne auprès d une jeunesse en quête d authenticité et de sincérité.'
            ],

            [
                'nom_groupe' => 'Rise Against',
                'type_musique' => 'Punk-Rock',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/riseagainst.jpg',
                'description' => 'Rise Against est un groupe de punk rock américain formé en 1999 à Chicago. Composé de Tim McIlrath (chant, guitare), Joe Principe (basse), 
                    Brandon Barnes (batterie) et Zach Blair (guitare), le groupe est connu pour ses textes engagés, ses mélodies accrocheuses et son énergie débordante. 
                    Avec des titres comme "Savior", "Prayer of the Refugee" et "The Violence", Rise Against a su conquérir un large public et devenir l un des fers de lance 
                    de la scène punk rock internationale. Leur musique, souvent teintée de messages politiques et sociaux, résonne auprès d une génération en quête de sens 
                    et de justice.'
            ],

            [
                'nom_groupe' => 'Rival Sons',
                'type_musique' => 'Rock',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/rivalsons.jpeg',
                'description' => 'Rival Sons est un groupe de rock américain formé en 2009 à Long Beach, en Californie. Composé de Jay Buchanan (chant), Scott Holiday (guitare), 
                    Dave Beste (basse) et Mike Miley (batterie), le groupe est connu pour son style rétro et ses influences blues et rock des années 70. Avec des titres comme 
                    "Pressure and Time", "Do Your Worst" et "Keep on Swinging", Rival Sons a su conquérir un large public et devenir l un des groupes les plus prometteurs de la 
                    scène rock actuelle. Leur musique, souvent teintée de nostalgie et d authenticité, résonne auprès d une génération en quête de sonorités authentiques et de 
                    performances scéniques envoûtantes.'

            ],

            [
                'nom_groupe' => 'Vald',
                'type_musique' => 'Rap',
                'photo' => 'https://nationsounds.online/wp-content/uploads/2024/06/vald.jpg',
                'description' => 'Vald est un rappeur français né en 1992 à Aulnay-sous-Bois. Révélé en 2015 avec son premier album "NQNT", le rappeur a su imposer son style 
                    décalé, ses textes provocateurs et son flow percutant sur la scène rap française. Avec des titres comme "Désaccordé", "Journal Perso" et "Vitrine", Vald 
                    a su conquérir un large public et devenir l un des artistes les plus en vue de sa génération. Son univers, souvent teinté d humour et de dérision, résonne 
                    auprès d une jeunesse en quête de liberté et d authenticité.'
            ],


        ];

        // Insérer chaque artiste dans la base de données
        Artist::insert($artists);

    }
    }

