import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login";
import Register from "./screens/signup";
import Home from "./screens/home";
import Actualhome from "./screens/Actualhome";
import Chasebank from "./screens/chasebank";
import Addfunds from "./screens/Addfunds";
import Boabank from "./screens/Boa";
import Suntrust from "./screens/Suntrust";
import TdBANK from "./screens/tdbank";
import Citibank from "./screens/citibank";
import Huntingtonbank from "./screens/huntington";
import WellsFargo from "./screens/Wellsfargo";
import Visa from "./screens/Visa";
import MasterCARD from "./screens/mastercard";
import AmericanExpress from "./screens/express";
import Fbaccount from "./screens/fbaccount";
import Linkedin from "./screens/Linkedin";
import Pof from "./screens/Pof";
import Match from "./screens/Match";
import Mingle from "./screens/mingle";
import Instagram from "./screens/Instagram";
import Zooks from "./screens/zooks";
import Smtp from "./screens/smtp";
import Phpmailerlogs from "./screens/Phpmailerlogs";
import Rdp from "./screens/Rdp";
import Cpanel from "./screens/cpnanel";
import Bankscam from "./screens/Bankscam";
import EmailScamPages from "./screens/emailscam";
import UsaFuliz from "./screens/UsaFuliz";
import CanadaFuliz from "./screens/CanadaFulz";
import Ukfuliz from "./screens/ukfuliz";
import EuropeFuliz from "./screens/Europefuliz";
import Usaleads from "./screens/Usaleads";
import CanadaLeads from "./screens/CanadaLeads";
import Europeleads from "./screens/EuropeLeads";
import Alibabaleads from "./screens/Alibabaleads";
import SingeporeLeads from "./screens/SingerporeLeads";
import ChinaLeads from "./screens/ChinaLeads";
import Hongkongleads from "./screens/Hongkongleads";
import Rbcbanklogs from "./screens/Rbcbanklogs";
import Bmologs from "./screens/Bmo";
import Tdcanada from "./screens/Tdcanada";
import Lollydbank from "./screens/Lollyds";
import Hsbcbank from "./screens/Hsbcbank";
import Halifax from "./screens/Halifaxbank";
import Barclaysbank from "./screens/Barclasybank";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/signup" exact={true} element={<Register />} />
          <Route path="/home" exact={true} element={<Actualhome />} />
          <Route path="/chasebanklogs" exact={true} element={<Chasebank />} />
          <Route path="/addfunds" exact={true} element={<Addfunds />} />
          <Route path="/boalogs" exact={true} element={<Boabank />} />
          <Route path="/suntrustlogs" exact={true} element={<Suntrust />} />
          <Route path="/tdbankuslogs" exact={true} element={<TdBANK />} />
          <Route path="/citibanklogs" exact={true} element={<Citibank />} />
          <Route path="/wellsfargologs" exact={true} element={<WellsFargo />} />
          <Route path="/visacard" exact={true} element={<Visa />} />
          <Route path="/mastercard" exact={true} element={<MasterCARD />} />
          <Route path="/facebookaccount" exact={true} element={<Fbaccount />} />
          <Route path="/linkedinaccount" exact={true} element={<Linkedin />} />
          <Route path="/match" exact={true} element={<Match />} />
          <Route path="/christinamingle" exact={true} element={<Mingle />} />
          <Route path="/zooks" exact={true} element={<Zooks />} />
          <Route path="/smtp" exact={true} element={<Smtp />} />
          <Route path="/rdp" exact={true} element={<Rdp />} />
          <Route path="/cpanel" exact={true} element={<Cpanel />} />
          <Route path="/bankscampages" exact={true} element={<Bankscam />} />
          <Route path="/usafuliz" exact={true} element={<UsaFuliz />} />
          <Route path="/canadafuliz" exact={true} element={<CanadaFuliz />} />
          <Route path="/ukfuliz" exact={true} element={<Ukfuliz />} />
          <Route path="/Europefuliz" exact={true} element={<EuropeFuliz />} />
          <Route path="/usalieads" exact={true} element={<Usaleads />} />
          <Route path="/canadaleads" exact={true} element={<CanadaLeads />} />
          <Route path="/europeleads" exact={true} element={<Europeleads />} />
          <Route path="/alibabaleads" exact={true} element={<Alibabaleads />} />
          <Route path="/chinaleads" exact={true} element={<ChinaLeads />} />
          <Route path="/rbcbanklogs" exact={true} element={<Rbcbanklogs />} />
          <Route path="/bmologs" exact={true} element={<Bmologs />} />
          <Route path="/tdcanadalogs" exact={true} element={<Tdcanada />} />
          <Route path="/hsbcbanklogs" exact={true} element={<Hsbcbank />} />
          <Route path="/halifaxbanklogs" exact={true} element={<Halifax />} />
          <Route
            path="/Barclaysbanklogs"
            exact={true}
            element={<Barclaysbank />}
          />
          <Route
            path="/lollydsbanklogs"
            exact={true}
            element={<Lollydbank />}
          />
          <Route
            path="/hongkongleads"
            exact={true}
            element={<Hongkongleads />}
          />
          <Route
            path="/singerporeleads"
            exact={true}
            element={<SingeporeLeads />}
          />
          <Route
            path="/emailscampages"
            exact={true}
            element={<EmailScamPages />}
          />
          <Route
            path="/phpmailerlogs"
            exact={true}
            element={<Phpmailerlogs />}
          />
          <Route
            path="/instagramaccounts"
            exact={true}
            element={<Instagram />}
          />
          <Route path="/pof" exact={true} element={<Pof />} />
          <Route
            path="/americanexpress"
            exact={true}
            element={<AmericanExpress />}
          />
          <Route
            path="/huntingtonbanklogs"
            exact={true}
            element={<Huntingtonbank />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
