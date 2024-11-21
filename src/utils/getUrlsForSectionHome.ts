export const getUrlsForSectionHome = (index : number)=> {
    switch (index) {
        case 0 : return 'casino/games/tag/top' ;
        case 1 : return 'casino/games/provider/pragmatic-play';
        case 2 : return 'casino/games/provider/ruby-play';
        case 3 : return 'live-casino/games/tag/all';
        case 4 : return 'casino/games/tag/top';
        default : return 'casino/games/tag/top'
    }
}