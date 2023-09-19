
import home from "../icons/home.png"
import blips from "../icons/blips-icon.png"
import video from "../icons/videos.png"
import liked from "../icons/liked.png"
import members from "../icons/members.png"
import restriction from "../icons/restriction.png"
import advertising from "../icons/advertising.png"
import subscriptions from "../icons/subscriptions.png"
import library from "../icons/library.png"
import history from "../icons/history.png"
import watchLater from '../icons/watch later.png'
import yourVideos from '../icons/your videos.png'

// Importing gardients Texts 
import homeTxt from '../text/home.png'
import blipsTxt from '../text/blips.png'
import videosTxt from '../text/videos.png'
import likedTxt from '../text/liked.png'
import membersTxt from '../text/members.png'
import restrictionTxt from '../text/redtriction.png'
import advertisingTxt from '../text/advertising.png'
import subscriptionTxt from '../text/sunscrtion.png'
import libraryTxt from '../text/linrary.png'
import historyText from '../text/history.png'
import watchLaterTxt from '../text/watch later.png'
import yourVideosTxt from '../text/your videos.png'
import { blipLinks } from "./videoLinks"

const options = [
    {
        title: <img src={homeTxt}/>,
        icon: home,
        sr: 'home' 
    }, {
        title:  <img src={blipsTxt}/>,
        icon: blips,
        sr: 'blips'
    }, {
        title: <img src={videosTxt}/>,
        icon: video,
        sr: 'video'
    }, {
        title: <img src={likedTxt}/>,
        icon: liked,
        sr: 'liked'
    },  {
        title: <img src={membersTxt}/>,
        icon: members,
        sr: 'members'
    }, {
        title: <img src={restrictionTxt}/>,
        icon: restriction,
        sr: 'restriction'
    }, {
        title: <img src={advertisingTxt}/>,
        icon: advertising,
        sr: 'advertising'
    }, {
        title: <img src={subscriptionTxt}/>,
        icon: subscriptions,
        sr: 'subscription'
    }, {
        title: <img src={libraryTxt}/>,
        icon: library,
        sr: 'libraryTxt'
    }, {
        title: <img src={historyText}/>,
        icon: history,
        sr: 'history'
    }, {
        title: <img src={yourVideosTxt}/>,
        icon: yourVideos,
        sr: 'your videos'
    },
    {
        title: <img src={watchLaterTxt}/>,
        icon: watchLater,
        sr: 'watch later'
    }
]

export default options