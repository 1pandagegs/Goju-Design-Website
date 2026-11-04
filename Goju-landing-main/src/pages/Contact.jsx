import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send, Loader, ChevronDown, Search } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Add this after your imports, before SearchableCountryDropdown
const ThreadsIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 192 192" 
    className={className}
    fill="currentColor"
    aria-label="Threads"
  >
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.35 61.6848C97.4200 61.6848 97.4876 61.6866 97.5566 61.6879C110.987 61.7443 122.584 70.546 125.696 86.6853C124.427 86.3985 123.143 86.1273 121.846 85.8717C115.94 84.7181 109.446 84.0981 102.593 84.0981C78.3953 84.0981 59.7028 98.4174 59.7028 116.742C59.7028 135.067 78.3953 149.386 102.593 149.386C118.851 149.386 132.132 143.35 140.132 133.344C145.235 126.842 147.597 118.724 147.597 109.961C147.597 104.664 146.24 99.9129 143.813 95.9259C142.958 94.9306 142.026 93.9991 141.024 93.1429C141.188 91.3967 141.537 90.1382 141.537 88.9883Z"/>
  </svg>
);

// Complete country codes data
const countries = [
  { code: "+93", country: "Afghanistan", flag: "🇦🇫", search: "afghanistan af" },
  { code: "+355", country: "Albania", flag: "🇦🇱", search: "albania al" },
  { code: "+213", country: "Algeria", flag: "🇩🇿", search: "algeria dz" },
  { code: "+1684", country: "American Samoa", flag: "🇦🇸", search: "american samoa as" },
  { code: "+376", country: "Andorra", flag: "🇦🇩", search: "andorra ad" },
  { code: "+244", country: "Angola", flag: "🇦🇴", search: "angola ao" },
  { code: "+1264", country: "Anguilla", flag: "🇦🇮", search: "anguilla ai" },
  { code: "+672", country: "Antarctica", flag: "🇦🇶", search: "antarctica aq" },
  { code: "+1268", country: "Antigua and Barbuda", flag: "🇦🇬", search: "antigua barbuda ag" },
  { code: "+54", country: "Argentina", flag: "🇦🇷", search: "argentina ar" },
  { code: "+374", country: "Armenia", flag: "🇦🇲", search: "armenia am" },
  { code: "+297", country: "Aruba", flag: "🇦🇼", search: "aruba aw" },
  { code: "+61", country: "Australia", flag: "🇦🇺", search: "australia au aussie" },
  { code: "+43", country: "Austria", flag: "🇦🇹", search: "austria at" },
  { code: "+994", country: "Azerbaijan", flag: "🇦🇿", search: "azerbaijan az" },
  { code: "+1242", country: "Bahamas", flag: "🇧🇸", search: "bahamas bs" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭", search: "bahrain bh" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩", search: "bangladesh bd" },
  { code: "+1246", country: "Barbados", flag: "🇧🇧", search: "barbados bb" },
  { code: "+375", country: "Belarus", flag: "🇧🇾", search: "belarus by" },
  { code: "+32", country: "Belgium", flag: "🇧🇪", search: "belgium be" },
  { code: "+501", country: "Belize", flag: "🇧🇿", search: "belize bz" },
  { code: "+229", country: "Benin", flag: "🇧🇯", search: "benin bj" },
  { code: "+1441", country: "Bermuda", flag: "🇧🇲", search: "bermuda bm" },
  { code: "+975", country: "Bhutan", flag: "🇧🇹", search: "bhutan bt" },
  { code: "+591", country: "Bolivia", flag: "🇧🇴", search: "bolivia bo" },
  { code: "+387", country: "Bosnia and Herzegovina", flag: "🇧🇦", search: "bosnia herzegovina ba" },
  { code: "+267", country: "Botswana", flag: "🇧🇼", search: "botswana bw" },
  { code: "+55", country: "Brazil", flag: "🇧🇷", search: "brazil br brasil" },
  { code: "+246", country: "British Indian Ocean Territory", flag: "🇮🇴", search: "british indian ocean territory io" },
  { code: "+673", country: "Brunei", flag: "🇧🇳", search: "brunei bn" },
  { code: "+359", country: "Bulgaria", flag: "🇧🇬", search: "bulgaria bg" },
  { code: "+226", country: "Burkina Faso", flag: "🇧🇫", search: "burkina faso bf" },
  { code: "+257", country: "Burundi", flag: "🇧🇮", search: "burundi bi" },
  { code: "+855", country: "Cambodia", flag: "🇰🇭", search: "cambodia kh" },
  { code: "+237", country: "Cameroon", flag: "🇨🇲", search: "cameroon cm" },
  { code: "+1", country: "Canada", flag: "🇨🇦", search: "canada ca" },
  { code: "+238", country: "Cape Verde", flag: "🇨🇻", search: "cape verde cv" },
  { code: "+1345", country: "Cayman Islands", flag: "🇰🇾", search: "cayman islands ky" },
  { code: "+236", country: "Central African Republic", flag: "🇨🇫", search: "central african republic cf" },
  { code: "+235", country: "Chad", flag: "🇹🇩", search: "chad td" },
  { code: "+56", country: "Chile", flag: "🇨🇱", search: "chile cl" },
  { code: "+86", country: "China", flag: "🇨🇳", search: "china cn" },
  { code: "+61", country: "Christmas Island", flag: "🇨🇽", search: "christmas island cx" },
  { code: "+61", country: "Cocos Islands", flag: "🇨🇨", search: "cocos islands cc" },
  { code: "+57", country: "Colombia", flag: "🇨🇴", search: "colombia co" },
  { code: "+269", country: "Comoros", flag: "🇰🇲", search: "comoros km" },
  { code: "+242", country: "Congo", flag: "🇨🇬", search: "congo cg" },
  { code: "+243", country: "Congo (DRC)", flag: "🇨🇩", search: "congo drc democratic republic cd" },
  { code: "+682", country: "Cook Islands", flag: "🇨🇰", search: "cook islands ck" },
  { code: "+506", country: "Costa Rica", flag: "🇨🇷", search: "costa rica cr" },
  { code: "+225", country: "Cote d'Ivoire", flag: "🇨🇮", search: "cote divoire ivory coast ci" },
  { code: "+385", country: "Croatia", flag: "🇭🇷", search: "croatia hr" },
  { code: "+53", country: "Cuba", flag: "🇨🇺", search: "cuba cu" },
  { code: "+357", country: "Cyprus", flag: "🇨🇾", search: "cyprus cy" },
  { code: "+420", country: "Czech Republic", flag: "🇨🇿", search: "czech republic cz czechia" },
  { code: "+45", country: "Denmark", flag: "🇩🇰", search: "denmark dk" },
  { code: "+253", country: "Djibouti", flag: "🇩🇯", search: "djibouti dj" },
  { code: "+1767", country: "Dominica", flag: "🇩🇲", search: "dominica dm" },
  { code: "+1809", country: "Dominican Republic", flag: "🇩🇴", search: "dominican republic do" },
  { code: "+593", country: "Ecuador", flag: "🇪🇨", search: "ecuador ec" },
  { code: "+20", country: "Egypt", flag: "🇪🇬", search: "egypt eg" },
  { code: "+503", country: "El Salvador", flag: "🇸🇻", search: "el salvador sv" },
  { code: "+240", country: "Equatorial Guinea", flag: "🇬🇶", search: "equatorial guinea gq" },
  { code: "+291", country: "Eritrea", flag: "🇪🇷", search: "eritrea er" },
  { code: "+372", country: "Estonia", flag: "🇪🇪", search: "estonia ee" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹", search: "ethiopia et" },
  { code: "+500", country: "Falkland Islands", flag: "🇫🇰", search: "falkland islands fk" },
  { code: "+298", country: "Faroe Islands", flag: "🇫🇴", search: "faroe islands fo" },
  { code: "+679", country: "Fiji", flag: "🇫🇯", search: "fiji fj" },
  { code: "+358", country: "Finland", flag: "🇫🇮", search: "finland fi" },
  { code: "+33", country: "France", flag: "🇫🇷", search: "france fr" },
  { code: "+594", country: "French Guiana", flag: "🇬🇫", search: "french guiana gf" },
  { code: "+689", country: "French Polynesia", flag: "🇵🇫", search: "french polynesia pf" },
  { code: "+241", country: "Gabon", flag: "🇬🇦", search: "gabon ga" },
  { code: "+220", country: "Gambia", flag: "🇬🇲", search: "gambia gm" },
  { code: "+995", country: "Georgia", flag: "🇬🇪", search: "georgia ge" },
  { code: "+49", country: "Germany", flag: "🇩🇪", search: "germany de deutschland" },
  { code: "+233", country: "Ghana", flag: "🇬🇭", search: "ghana gh" },
  { code: "+350", country: "Gibraltar", flag: "🇬🇮", search: "gibraltar gi" },
  { code: "+30", country: "Greece", flag: "🇬🇷", search: "greece gr" },
  { code: "+299", country: "Greenland", flag: "🇬🇱", search: "greenland gl" },
  { code: "+1473", country: "Grenada", flag: "🇬🇩", search: "grenada gd" },
  { code: "+590", country: "Guadeloupe", flag: "🇬🇵", search: "guadeloupe gp" },
  { code: "+1671", country: "Guam", flag: "🇬🇺", search: "guam gu" },
  { code: "+502", country: "Guatemala", flag: "🇬🇹", search: "guatemala gt" },
  { code: "+44", country: "Guernsey", flag: "🇬🇬", search: "guernsey gg" },
  { code: "+224", country: "Guinea", flag: "🇬🇳", search: "guinea gn" },
  { code: "+245", country: "Guinea-Bissau", flag: "🇬🇼", search: "guinea bissau gw" },
  { code: "+592", country: "Guyana", flag: "🇬🇾", search: "guyana gy" },
  { code: "+509", country: "Haiti", flag: "🇭🇹", search: "haiti ht" },
  { code: "+504", country: "Honduras", flag: "🇭🇳", search: "honduras hn" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰", search: "hong kong hk" },
  { code: "+36", country: "Hungary", flag: "🇭🇺", search: "hungary hu" },
  { code: "+354", country: "Iceland", flag: "🇮🇸", search: "iceland is" },
  { code: "+91", country: "India", flag: "🇮🇳", search: "india in" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩", search: "indonesia id" },
  { code: "+98", country: "Iran", flag: "🇮🇷", search: "iran ir" },
  { code: "+964", country: "Iraq", flag: "🇮🇶", search: "iraq iq" },
  { code: "+353", country: "Ireland", flag: "🇮🇪", search: "ireland ie" },
  { code: "+44", country: "Isle of Man", flag: "🇮🇲", search: "isle of man im" },
  { code: "+972", country: "Israel", flag: "🇮🇱", search: "israel il" },
  { code: "+39", country: "Italy", flag: "🇮🇹", search: "italy it italia" },
  { code: "+1876", country: "Jamaica", flag: "🇯🇲", search: "jamaica jm" },
  { code: "+81", country: "Japan", flag: "🇯🇵", search: "japan jp" },
  { code: "+44", country: "Jersey", flag: "🇯🇪", search: "jersey je" },
  { code: "+962", country: "Jordan", flag: "🇯🇴", search: "jordan jo" },
  { code: "+7", country: "Kazakhstan", flag: "🇰🇿", search: "kazakhstan kz" },
  { code: "+254", country: "Kenya", flag: "🇰🇪", search: "kenya ke" },
  { code: "+686", country: "Kiribati", flag: "🇰🇮", search: "kiribati ki" },
  { code: "+850", country: "North Korea", flag: "🇰🇵", search: "north korea kp" },
  { code: "+82", country: "South Korea", flag: "🇰🇷", search: "south korea kr korea" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼", search: "kuwait kw" },
  { code: "+996", country: "Kyrgyzstan", flag: "🇰🇬", search: "kyrgyzstan kg" },
  { code: "+856", country: "Laos", flag: "🇱🇦", search: "laos la" },
  { code: "+371", country: "Latvia", flag: "🇱🇻", search: "latvia lv" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧", search: "lebanon lb" },
  { code: "+266", country: "Lesotho", flag: "🇱🇸", search: "lesotho ls" },
  { code: "+231", country: "Liberia", flag: "🇱🇷", search: "liberia lr" },
  { code: "+218", country: "Libya", flag: "🇱🇾", search: "libya ly" },
  { code: "+423", country: "Liechtenstein", flag: "🇱🇮", search: "liechtenstein li" },
  { code: "+370", country: "Lithuania", flag: "🇱🇹", search: "lithuania lt" },
  { code: "+352", country: "Luxembourg", flag: "🇱🇺", search: "luxembourg lu" },
  { code: "+853", country: "Macau", flag: "🇲🇴", search: "macau mo" },
  { code: "+389", country: "Macedonia", flag: "🇲🇰", search: "macedonia mk north" },
  { code: "+261", country: "Madagascar", flag: "🇲🇬", search: "madagascar mg" },
  { code: "+265", country: "Malawi", flag: "🇲🇼", search: "malawi mw" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾", search: "malaysia my" },
  { code: "+960", country: "Maldives", flag: "🇲🇻", search: "maldives mv" },
  { code: "+223", country: "Mali", flag: "🇲🇱", search: "mali ml" },
  { code: "+356", country: "Malta", flag: "🇲🇹", search: "malta mt" },
  { code: "+692", country: "Marshall Islands", flag: "🇲🇭", search: "marshall islands mh" },
  { code: "+596", country: "Martinique", flag: "🇲🇶", search: "martinique mq" },
  { code: "+222", country: "Mauritania", flag: "🇲🇷", search: "mauritania mr" },
  { code: "+230", country: "Mauritius", flag: "🇲🇺", search: "mauritius mu" },
  { code: "+262", country: "Mayotte", flag: "🇾🇹", search: "mayotte yt" },
  { code: "+52", country: "Mexico", flag: "🇲🇽", search: "mexico mx" },
  { code: "+691", country: "Micronesia", flag: "🇫🇲", search: "micronesia fm" },
  { code: "+373", country: "Moldova", flag: "🇲🇩", search: "moldova md" },
  { code: "+377", country: "Monaco", flag: "🇲🇨", search: "monaco mc" },
  { code: "+976", country: "Mongolia", flag: "🇲🇳", search: "mongolia mn" },
  { code: "+382", country: "Montenegro", flag: "🇲🇪", search: "montenegro me" },
  { code: "+1664", country: "Montserrat", flag: "🇲🇸", search: "montserrat ms" },
  { code: "+212", country: "Morocco", flag: "🇲🇦", search: "morocco ma" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿", search: "mozambique mz" },
  { code: "+95", country: "Myanmar", flag: "🇲🇲", search: "myanmar mm burma" },
  { code: "+264", country: "Namibia", flag: "🇳🇦", search: "namibia na" },
  { code: "+674", country: "Nauru", flag: "🇳🇷", search: "nauru nr" },
  { code: "+977", country: "Nepal", flag: "🇳🇵", search: "nepal np" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱", search: "netherlands nl holland" },
  { code: "+687", country: "New Caledonia", flag: "🇳🇨", search: "new caledonia nc" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿", search: "new zealand nz" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮", search: "nicaragua ni" },
  { code: "+227", country: "Niger", flag: "🇳🇪", search: "niger ne" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬", search: "nigeria ng" },
  { code: "+683", country: "Niue", flag: "🇳🇺", search: "niue nu" },
  { code: "+672", country: "Norfolk Island", flag: "🇳🇫", search: "norfolk island nf" },
  { code: "+1670", country: "Northern Mariana Islands", flag: "🇲🇵", search: "northern mariana islands mp" },
  { code: "+47", country: "Norway", flag: "🇳🇴", search: "norway no" },
  { code: "+968", country: "Oman", flag: "🇴🇲", search: "oman om" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰", search: "pakistan pk" },
  { code: "+680", country: "Palau", flag: "🇵🇼", search: "palau pw" },
  { code: "+970", country: "Palestine", flag: "🇵🇸", search: "palestine ps" },
  { code: "+507", country: "Panama", flag: "🇵🇦", search: "panama pa" },
  { code: "+675", country: "Papua New Guinea", flag: "🇵🇬", search: "papua new guinea pg" },
  { code: "+595", country: "Paraguay", flag: "🇵🇾", search: "paraguay py" },
  { code: "+51", country: "Peru", flag: "🇵🇪", search: "peru pe" },
  { code: "+63", country: "Philippines", flag: "🇵🇭", search: "philippines ph" },
  { code: "+48", country: "Poland", flag: "🇵🇱", search: "poland pl" },
  { code: "+351", country: "Portugal", flag: "🇵🇹", search: "portugal pt" },
  { code: "+1787", country: "Puerto Rico", flag: "🇵🇷", search: "puerto rico pr" },
  { code: "+974", country: "Qatar", flag: "🇶🇦", search: "qatar qa" },
  { code: "+262", country: "Reunion", flag: "🇷🇪", search: "reunion re" },
  { code: "+40", country: "Romania", flag: "🇷🇴", search: "romania ro" },
  { code: "+7", country: "Russia", flag: "🇷🇺", search: "russia ru" },
  { code: "+250", country: "Rwanda", flag: "🇷🇼", search: "rwanda rw" },
  { code: "+290", country: "Saint Helena", flag: "🇸🇭", search: "saint helena sh" },
  { code: "+1869", country: "Saint Kitts and Nevis", flag: "🇰🇳", search: "saint kitts nevis kn" },
  { code: "+1758", country: "Saint Lucia", flag: "🇱🇨", search: "saint lucia lc" },
  { code: "+508", country: "Saint Pierre and Miquelon", flag: "🇵🇲", search: "saint pierre miquelon pm" },
  { code: "+1784", country: "Saint Vincent and Grenadines", flag: "🇻🇨", search: "saint vincent grenadines vc" },
  { code: "+685", country: "Samoa", flag: "🇼🇸", search: "samoa ws" },
  { code: "+378", country: "San Marino", flag: "🇸🇲", search: "san marino sm" },
  { code: "+239", country: "Sao Tome and Principe", flag: "🇸🇹", search: "sao tome principe st" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦", search: "saudi arabia sa" },
  { code: "+221", country: "Senegal", flag: "🇸🇳", search: "senegal sn" },
  { code: "+381", country: "Serbia", flag: "🇷🇸", search: "serbia rs" },
  { code: "+248", country: "Seychelles", flag: "🇸🇨", search: "seychelles sc" },
  { code: "+232", country: "Sierra Leone", flag: "🇸🇱", search: "sierra leone sl" },
  { code: "+65", country: "Singapore", flag: "🇸🇬", search: "singapore sg" },
  { code: "+421", country: "Slovakia", flag: "🇸🇰", search: "slovakia sk" },
  { code: "+386", country: "Slovenia", flag: "🇸🇮", search: "slovenia si" },
  { code: "+677", country: "Solomon Islands", flag: "🇸🇧", search: "solomon islands sb" },
  { code: "+252", country: "Somalia", flag: "🇸🇴", search: "somalia so" },
  { code: "+27", country: "South Africa", flag: "🇿🇦", search: "south africa za" },
  { code: "+34", country: "Spain", flag: "🇪🇸", search: "spain es espana" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰", search: "sri lanka lk" },
  { code: "+249", country: "Sudan", flag: "🇸🇩", search: "sudan sd" },
  { code: "+597", country: "Suriname", flag: "🇸🇷", search: "suriname sr" },
  { code: "+268", country: "Swaziland", flag: "🇸🇿", search: "swaziland eswatini sz" },
  { code: "+46", country: "Sweden", flag: "🇸🇪", search: "sweden se" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭", search: "switzerland ch" },
  { code: "+963", country: "Syria", flag: "🇸🇾", search: "syria sy" },
  { code: "+886", country: "Taiwan", flag: "🇹🇼", search: "taiwan tw" },
  { code: "+992", country: "Tajikistan", flag: "🇹🇯", search: "tajikistan tj" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿", search: "tanzania tz" },
  { code: "+66", country: "Thailand", flag: "🇹🇭", search: "thailand th" },
  { code: "+670", country: "Timor-Leste", flag: "🇹🇱", search: "timor leste tl east timor" },
  { code: "+228", country: "Togo", flag: "🇹🇬", search: "togo tg" },
  { code: "+690", country: "Tokelau", flag: "🇹🇰", search: "tokelau tk" },
  { code: "+676", country: "Tonga", flag: "🇹🇴", search: "tonga to" },
  { code: "+1868", country: "Trinidad and Tobago", flag: "🇹🇹", search: "trinidad tobago tt" },
  { code: "+216", country: "Tunisia", flag: "🇹🇳", search: "tunisia tn" },
  { code: "+90", country: "Turkey", flag: "🇹🇷", search: "turkey tr" },
  { code: "+993", country: "Turkmenistan", flag: "🇹🇲", search: "turkmenistan tm" },
  { code: "+1649", country: "Turks and Caicos", flag: "🇹🇨", search: "turks caicos tc" },
  { code: "+688", country: "Tuvalu", flag: "🇹🇻", search: "tuvalu tv" },
  { code: "+256", country: "Uganda", flag: "🇺🇬", search: "uganda ug" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦", search: "ukraine ua" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪", search: "uae united arab emirates ae" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧", search: "uk united kingdom gb britain england scotland wales" },
  { code: "+1", country: "United States", flag: "🇺🇸", search: "usa us united states america" },
  { code: "+598", country: "Uruguay", flag: "🇺🇾", search: "uruguay uy" },
  { code: "+998", country: "Uzbekistan", flag: "🇺🇿", search: "uzbekistan uz" },
  { code: "+678", country: "Vanuatu", flag: "🇻🇺", search: "vanuatu vu" },
  { code: "+39", country: "Vatican City", flag: "🇻🇦", search: "vatican city va" },
  { code: "+58", country: "Venezuela", flag: "🇻🇪", search: "venezuela ve" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳", search: "vietnam vn" },
  { code: "+1284", country: "British Virgin Islands", flag: "🇻🇬", search: "british virgin islands vg" },
  { code: "+1340", country: "US Virgin Islands", flag: "🇻🇮", search: "us virgin islands vi" },
  { code: "+681", country: "Wallis and Futuna", flag: "🇼🇫", search: "wallis futuna wf" },
  { code: "+212", country: "Western Sahara", flag: "🇪🇭", search: "western sahara eh" },
  { code: "+967", country: "Yemen", flag: "🇾🇪", search: "yemen ye" },
  { code: "+260", country: "Zambia", flag: "🇿🇲", search: "zambia zm" },
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼", search: "zimbabwe zw" }
];

// SearchableCountryDropdown Component
function SearchableCountryDropdown({ value, onChange, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const selectedCountry = countries.find(country => country.code === value) || countries.find(c => c.country === "Nigeria");

  const filteredCountries = countries.filter(country =>
    country.search.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (country) => {
    onChange({ target: { name, value: country.code } });
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent bg-white flex items-center justify-between"
      >
        <span className="flex items-center gap-1">
          <span>{selectedCountry.flag}</span>
          <span>{selectedCountry.code}</span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.18 }}
        >
          <ChevronDown className={`w-4 h-4`} />
        </motion.span>
      </button>

      {isOpen && (
        <motion.div
          className="absolute z-50 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent text-sm"
              />
            </div>
          </div>
          
          <div className="max-h-60 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={`${country.code}-${country.country}`}
                  type="button"
                  onClick={() => handleSelect(country)}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-sm ${
                    selectedCountry.code === country.code && selectedCountry.country === country.country
                      ? 'bg-[#B17F4A] text-white hover:bg-[#B17F4A]'
                      : ''
                  }`}
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="font-medium">{country.code}</span>
                  <span className="text-gray-600">{country.country}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500 text-sm">No countries found</div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    countryCode: '+234', // Default to Nigeria
    serviceNeeded: '',
    projectBudget: '',
    projectTimeline: '',
    projectDetails: ''
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company_name: formData.companyName,
      phone_number: formData.countryCode + ' ' + formData.phoneNumber,
      service_needed: formData.serviceNeeded,
      project_budget: formData.projectBudget,
      project_timeline: formData.projectTimeline,
      project_details: formData.projectDetails
    };

    // Auto-reply template parameters
    const autoReplyParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: "Goju Design Team"
    };

    // Send main email first
    emailjs
      .send(
        "service_6fgbn7t",  //service id
        "template_jaxxv3c", //template id
        templateParams,
        "2FrSyujfbTxDyjEJM"  //public key
      )
      .then(() => {
        // Send auto-reply email
        return emailjs.send(
          "service_6fgbn7t",  // Same service id
          "template_5upzknj", // Create this template for auto-reply
          autoReplyParams,
          "2FrSyujfbTxDyjEJM"  // Same public key
        );
      })
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          companyName: '',
          phoneNumber: '',
          countryCode: '+234',
          serviceNeeded: '',
          projectBudget: '',
          projectTimeline: '',
          projectDetails: ''
        });
      })
      .catch((err) => {
        alert('Something went wrong. Try again.');
        console.error(err);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <motion.div
      className="bg-white min-h-screen font-exo"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center py-16 px-4"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-gray-900 via-[#B17F4A] to-gray-900 bg-clip-text text-transparent animate-gradient">Let's Create Something Amazing</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Ready to transform your business with exceptional design? We're here to help bring your vision to life. Get in touch and let's discuss your project.
        </p>

        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 6s ease infinite;
          }
        `}</style>
      </motion.div>

      {/* Contact Cards Section */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <motion.h2
          className="text-2xl font-bold text-[#B17F4A] text-center mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
        >
          How to Reach Us
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          Choose the best way to get in touch. We're always ready to discuss your project and answer any questions.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Call Us Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 text-center"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <div className="w-12 h-12 bg-[#B17F4A] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <a href="tel:+2347038649237" className="text-[#B17F4A] hover:underline font-medium">
              +234 703 864 9237
            </a>
            <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9AM-6PM</p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 text-center"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.02 }}
          >
            <div className="w-12 h-12 bg-[#B17F4A] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <a href="mailto:info.gojudesign@gmail.com" className="text-[#B17F4A] hover:underline">
              info.gojudesign@gmail.com
            </a>
          </motion.div>

          {/* Socials Card */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 text-center"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.04 }}
          >
            <div className="w-12 h-12 bg-[#B17F4A] rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="text-white" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Socials</h3>
            <div className="flex justify-center space-x-4 text-[#B17F4A]">
              <a href="https://www.threads.net/@gojudesign" target="_blank" rel="noopener noreferrer">
                <ThreadsIcon size={20} /> 
              </a>
              <a href="https://x.com/gojudesigns?s=21&t=2MmXrfnpHULioIpxUNiLKA" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/gojudesign?igsh=MWRzM3l5MHp3dnRsNA==" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/gojudesign/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT: FORM */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
            >
            <h2 className="text-2xl font-bold text-[#B17F4A] mb-6">Tell Us About Your Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Your full name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent" 
                    required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent" 
                    required 
                    />
                </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input 
                    type="text" 
                    name="companyName" 
                    placeholder="Your company" 
                    value={formData.companyName} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="flex gap-2">
                      <SearchableCountryDropdown
                        value={formData.countryCode}
                        onChange={handleChange}
                        name="countryCode"
                      />
                      <input 
                        type="tel" 
                        name="phoneNumber" 
                        placeholder="901 234 5678" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        className="w-10 flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent" 
                      />
                    </div>
                </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed*</label>
                    <select 
                    name="serviceNeeded" 
                    value={formData.serviceNeeded} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent"
                    required
                    >
                    <option value="">Select a service</option>
                    <option value="brand-identity">Brand Identity</option>
                    <option value="web-design">Web Design</option>
                    <option value="mobile-apps">Mobile Apps</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Budget</label>
                    <select 
                    name="projectBudget" 
                    value={formData.projectBudget} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent"
                    >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₦50,000</option>
                    <option value="50k-100k">₦50,000 - ₦100,000</option>
                    <option value="100k-500k">₦100,000 - ₦500,000</option>
                    <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                    <option value="above-1m">Above ₦1,000,000</option>
                    </select>
                </div>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Timeline</label>
                <select 
                    name="projectTimeline" 
                    value={formData.projectTimeline} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent"
                >
                    <option value="">When do you need this completed?</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="flexible">I'm flexible</option>
                </select>
                </div>

                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Details*</label>
                <textarea 
                    name="projectDetails" 
                    placeholder="Tell us about your project, goals, target audience, and any specific requirements..." 
                    value={formData.projectDetails} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-[#B17F4A] focus:border-transparent" 
                    required 
                />
                </div>

                <motion.button 
                type="submit" 
                disabled={sending} 
                className="w-full bg-[#B17F4A] text-white py-4 rounded-lg font-medium hover:bg-[#9d6939] transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                >
                {sending ? (
                    <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending Message...
                    </>
                ) : (
                    <>
                    <Send size={18} />
                    Send Message
                    </>
                )}
                </motion.button>
            </form>
            </motion.div>

          {/* RIGHT: INFO CARDS */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {/* Quick Response Card */}
            <motion.div className="bg-white rounded-lg shadow-md p-6" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-[#B17F4A]" size={24} />
                <h3 className="font-bold text-[#B17F4A]">Quick Response</h3>
              </div>
              <p className="text-gray-700 text-sm">
                We typically respond to all inquiries within 2-4 hours during business hours, and within 24 hours on weekends.
              </p>
            </motion.div>

            {/* Free Consultation Card */}
            <motion.div className="bg-white rounded-lg shadow-md p-6" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.02 }}>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-[#B17F4A]" size={24} />
                <h3 className="font-bold text-[#B17F4A]">Free Consultation</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Every project starts with a 30-minute consultation to understand your needs and explore how we can help.
              </p>
            </motion.div>

            {/* Schedule Meeting Card */}
            <motion.div className="bg-[#B17F4A] rounded-lg shadow-md p-6 text-white" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.04 }}>
              <h3 className="font-bold text-xl mb-2">Schedule a Meeting</h3>
              <p className="text-white/90 text-sm mb-4">
                Prefer to talk in person? Schedule a meeting via video call.
              </p>
              <Link
                to="/Consultation"
                className="inline-block bg-white text-[#B17F4A] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Book a Meeting
              </Link>
            </motion.div>

            {/* Have a Question Card */}
            <motion.div className="bg-white rounded-lg shadow-md p-6" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.06 }}>
              <h3 className="font-bold text-[#B17F4A] mb-3">Have a Question?</h3>
              <p className="text-gray-700 text-sm mb-4">
                Check out our frequently asked questions or browse our portfolio to see samples of our work.
              </p>
              <div className="space-y-2">
                <Link
                  to="/faq"
                  className="block w-full px-4 py-2 border border-[#B17F4A] text-[#B17F4A] rounded-lg hover:bg-[#B17F4A] hover:text-white transition-colors text-center text-sm"
                >
                  View FAQ
                </Link>
                <Link
                  to="/portfolio"
                  className="block w-full px-4 py-2 border border-[#B17F4A] text-[#B17F4A] rounded-lg hover:bg-[#B17F4A] hover:text-white transition-colors text-center text-sm"
                >
                  Browse Portfolio
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
