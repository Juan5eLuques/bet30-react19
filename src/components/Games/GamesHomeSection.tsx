import { Flame, Heart, Star } from 'lucide-react';
import React from 'react';
import Card from '../Card';
import Image from 'next/image';
import Link from 'next/link';
import { GameList } from '@/types/gamesComponent';
import { getUrlsForSectionHome } from '@/utils/getUrlsForSectionHome';

interface Props {
    nameSection: string;
    gameList: GameList[];
    index: number;
}



const GamesHomeSection: React.FC<Props> = ({ nameSection, gameList, index = 0 }) => {
    // Función para seleccionar el icono basado en el index
    const RenderIcon = (index: number) => {
        switch (index) {
            case 0:
                return <Image alt='Top games' src={'/images/providers/trending.png'} width={32} height={32} className='h-5 w-5 md:h-8 md:w-8' ></Image>;
            case 1:
                return <svg viewBox="0 0 32 32" width={32} height={32} className='h-9 w-9 md:h-20 md:w-20' xmlns="http://www.w3.org/2000/svg" ><g clipPath="url(#clip0_550_345ab6fae38-23f5-4c17-82ca-8600e943c3ff)"><rect x="0.875" width="28" height="28" fill="url(#pattern0ab6fae38-23f5-4c17-82ca-8600e943c3ff)"></rect></g><defs><pattern id="pattern0ab6fae38-23f5-4c17-82ca-8600e943c3ff" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_550_345ab6fae38-23f5-4c17-82ca-8600e943c3ff" transform="scale(0.0125)"></use></pattern><clipPath id="clip0_550_345ab6fae38-23f5-4c17-82ca-8600e943c3ff"><rect width="30" height="30" fill="white" transform="translate(0.875)"></rect></clipPath><image id="image0_550_345ab6fae38-23f5-4c17-82ca-8600e943c3ff" width="80" height="80" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAGeElEQVR4Ae1c23HjNhR1CSkBJaSDpIOkA7uEdGB3sJkJufnUdpB0YHew7mDdQfQlZvOjzIEuoMMrgA+QhCBSnvGQEi8e9+C+AerhYeG/fyvz28JDrLv7pjZvTW1e1s3lgtwJgMfmD/PzgsOst2sPYG2+rZfLBTkjAI93VU4AWgF4bP40Zkg3h9r8fvxkfhhCu2qapjJfmtpA+uz/oTZ/9THc1GaHdn10m3gOtXXg+WuHQ0HYY+k6aDYBnGMyCGBlXt1zvkK9D5X5BwDy95u+b2rz5CWPVDkU1jSVeRXat02DxswDqCCASgr/q82PRHcPvB2IChjvTCxYZOfgdTcHoFXPz+anvtCEgGkDSFLY1OabpyNg3UKs8oo4jSQHADyHYremMh8eHLaDuBewWs+3AqCTCnYU4kWf3TNcL4JpBrEyXwD6pgEUkOBt9w4IBMxOGoOhDIOoPfXWJNBJG0sigDzU5qtIVziUOYOIkhfbx+16YZ9JOEAq89rpiR1d+7pdAEM27wLUNlgsefb+UJu/nVRv8ipqe7aHp/TsHKb0AIiQZpPAMdNjpU7ZwMFlLx5zdfed8R9LYWU+oLbirV++fza/Og++OlDGMKS9MkuZAPbUl8WMGW+VtC0prMyHVe2BVelVAjKWKUn14FA6Q5MGOXVlHpEO2n+UtuQfQbn7/ntlfkFYNHYeN0sPWxayZ9ZTV+YR4LgiKqt437202QHQmwUnZeK2PngunF7EgH3AxZ5jIVYtmX3AHSrzLhtQL5YWhVj9f8qZsceiUz9eiN2qHBOYoVI9M3q0oAGURKcii4JdPx+0k4TuQqYjRWuu1iYaxmCrMxG0GDN2LFV3hJ28WbU+VOYTSYOTvLe5gdOASgakJfJJ0xX7GWojYYcDDdc9sovUSaOtXRAKbWTz/TGkpjIHZDZ+DmifOn62djLxr2ri71OkLmY/3RihCrhjOJCP79yzIq8XzEq5PnWytN/iJckBp6+ueKvHgvSyk0GfmqaIz1alSGXmONvS2qnjviP3MRCloMt2sSybqL3tXAVRLWVDPsckzIY8BHwx3llW16sYYruQYU9Rk1YhgpjvAzI2Pi80bGeMLmWuyW2U3dvPubIDdvP8wilQoyraOm537SN0vKJgAF4veSUCDSEhiVIYrfxc9DlzQB9gI/4VG3mobpwy/UnAAcSk7vx9z76yeOYT/bWkUEsfjHQ6TN0tAaLkzWeQ4jZx0NE4LkjMaXa6OaGnLH2YDD1a7NYumsp3le17GeoY2CvPFTUMZlzUykvDlDRt8KBEiMxGAMCJh6dUCWKppu6Xv1UZwn75EZcZgVO9rEKAiN+pTixwXYbleXu1kuxsaS5n0hq0NsesKzcvfrY3UuM8pyFY7CGFC/CUtUs2R6m2dNSEVXaQxfuOmuBIYo4Js2iTnCiwHji7+x8JzhByDmf69q6H9NdLwwFolgF7ZzSdwDnELPywB84y4HR8envwAObwxH6wk/uPJu29sy6IgHha3qbTYLCDdwDHCoIqL90BHA1g+1jFHcBJAOYwumMnOJKeCyNZ0lLYPbKDyxvdkYCMJedAeu6KenAuCsCbT+Va/CxYFPZgsshbScwxqB99/htODIYWYyfPgj1xFrsxecbhDuwGk5SzltrTCY7MFYxbfimG93WyCgIbXqhxljJQcCmnfdna0869vckHduY4BzMNivGtuQqTVX3dVFveC3Yk9wq6iSReuSwHVU7sJr2ZGGB/4gmHKtN7y9uSpQ8OMe/oNJou72ep6NL4qbeqJJdf+njirZCmlBNPPEF1z6bnKrZPzedBe2R4Nk1TyueW6sJul5IEtI6MnQLT4s4iI9SS89TuREVZlSROiRAbZknMB4o2HJ4Cr7wiiEzynSo1eBPp6q8WaMmD3cNcB2Kfl0wKDT60ETCv9soVbFxL8irzUSx4bqksiOoIGsIGfO9oclzl/WJn7+x7ecWD54DBRLVNFGkM/raWazfH1UodHX7CuEWrbRfTqmpzOs1w+gmU2YG0IUrgPeSsVZYuMFKf2ThRqbRIBX7qczdFta2kn95698ftRNKPNsAvJc5LBY/bSdqnHYyXSnlB8dn+dkKkMIFneMUf3l2lY97WSZWorBiPgZhyL7YRm1JBIL30SJV45Gf0OfiM9BQ+imgL1bY2MqDeI4DbIwu6lSLGYsDDDoqKu99DeOMiBQCFJ4VnB+ignWI752TkfxdqJ4e9jDjXAAAAAElFTkSuQmCC"></image></defs></svg>
            case 2:
                return <Image alt='Ruby Play' src={'/images/providers/rubyplay.png'} width={32} height={32} className='h-5 w-5 md:h-8 md:w-8' ></Image>;
            case 3:
                return <Image alt='Live casino' src={'/images/providers/live.png'} width={32} height={32} className='h-5 w-5 md:h-8 md:w-8' ></Image>;
            default:
                return <Flame fill="white" width={24} height={24} />; // Icono por defecto
        }
    };


    return (
        <section className="flex w-full justify-between flex-col mt-4 mb-4">
            <div className="flex w-full justify-between md:pt-2 md:pb-2">
                <div className="font-bold text-lg md:text-xl flex items-center justify-start gap-2 text-white cursor-default">
                    <div className='w-6 h-6 flex justify-center items-center md:h-12 md:w-12'>
                        {RenderIcon(index)}
                    </div>
                    <span className='text-nowrap '>
                        {nameSection}
                    </span>
                </div>
                <Link href={getUrlsForSectionHome(index)}>
                    <button className="px-3 py-1 rounded-full shadow-xl bg-wallet-gradient">Ver más</button>
                </Link>
            </div>
            <div className="w-12 mt-2 border-b-2 border-y-[#1475e1] mb-4"></div>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6 xl:grid-cols-8">
                {gameList.slice(0, 8).map((game, index) => (
                    <div key={game.id} className={index >= 6 ? "hidden xl:block" : "block"}>
                        <Card
                            href={`/game/${game.provider.aggregator_id}/${game.launch_code}`}
                            title={game.name}
                            src={`https://a7a.nyc3.cdn.digitaloceanspaces.com/userFiles/games.a7a.club/${game.thumbnail}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GamesHomeSection;
