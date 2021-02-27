import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

const Teenusetingimused = () => {
  return (
    <Layout>
      <Helmet>
        <title>OÜ Kodulehe Tellimine - teenuse tingimused</title>
        <meta name="description" content="Tellimuse saatmisel kinnitab tellija, et on tutvunud veebilehe tellikoduleht.ee teenuse tingimustega ning aktsepteerib neid." />
      </Helmet >
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title is-size-3 has-text-weight-bold is-bold-light">OÜ Kodulehe Tellimine - teenuse tingimused</h1>
                <h2 className="title is-size-4 has-text-weight-bold is-bold-light">1. Tingimuste ulatus ja kehtivus</h2>

                <p className="content">1.1. Tingimused kehtivad tellija ja tellikoduleht.ee omaniku OÜ Kodulehe Tellimine (Reg: 14933675) vahel kodulehel pakutava teenuse osutamisel tekkivate vaidluste lahendamisel.</p>
                <p className="content">1.2. Lisaks käesolevatele tingimustele reguleerivad kodulehe vahendusel teenuse tellimisel tekkivaid õigussuhteid Eesti Vabariigis kehtivad õigusaktid.</p>
                <h2 className="title is-size-4 has-text-weight-bold is-bold-light">2. Hinnainfo</h2>
                <p className="content">2.1. Teenuste hinnad on eurodes ja ei sisalda käibemaksu. Teenuste hinnad on lõplikud ja käibemaksu ei lisandu. Teenuste hinnad kodulehel ja saadavus võivad muutuda ilma etteteatamiseta.</p>
                <h2 className="title is-size-4 has-text-weight-bold is-bold-light">3. Tellimuse vormistamine</h2>
                <p className="content">3.1. Teenuse tellimiseks saada OÜ Kodulehe Tellimisele kiri. Seejärel toimub kohtumine sobivas kohas või interneti vahendusel, millel lepitakse kokku täpsed tingimused.</p>
                <h2 className="title is-size-4 has-text-weight-bold is-bold-light">4. Tellimuse eest tasumine</h2>
                <p className="content">4.1. Teenuse eest tuleb tasuda maksega kokkulepitud summas ja ajal. Teenuse eest tuleb tasuda pangaülekandega.</p>
                <p className="content">4.2. Tellija ja OÜ Kodulehe Tellimine vahel kokku lepitud hinnad võivad muutuda ainult mõlemapoolsel nõusolekul.</p>
                <h2 className="title is-size-4 has-text-weight-bold is-bold-light">5. Tellimuse täitmine</h2>
                <p className="content">5.1. OÜ Kodulehe Tellimine hakkab teenust osutama pärast esimese makse laekumist (Arveldusarve: SEB EE461010220285246226).</p>
                <p className="content">5.2. OÜ Kodulehe Tellimine osutab teenust kokkulepitud ajal ja mahus.</p>
                <p className="content">5.3. Kui tellitud teenust ei ole võimalik osutada, teavitatakse sellest tellijat viivitamatult.</p>
                <h2 className="title is-size-4 has-text-weight-bold is-bold-light">6. Veebimajutus</h2>
                <p className="content">6.1. OÜ Kodulehe Tellimine kasutab tellija kodulehele veebis majutamiseks <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"
                  title="Kodulehe tellimise kontaktvorm">Netlify</a> teenust <a href="https://www.netlify.com/pricing/" target="_blank" rel="noopener noreferrer"
                    title="Kodulehe tellimise kontaktvorm">Netlify hinnakirja</a> järgi.</p>
                <p className="content">6.2. OÜ Kodulehe Tellimine ei võta vahendustasu veebimajutuse teenuse vahendamiselt.</p>
                <p className="content">6.3. OÜ Kodulehe Tellimine teavitab tellijat viivitamatult kui kodulehe majutamisega kaasneb tasu või muutustest Netlify hinnakirjas tellijat puudutavate teenuste osas, millega kaasneb tasu.</p>

                <h2 className="title is-size-4 has-text-weight-bold is-bold-light">7. Vastutus</h2>

                <p className="content">7.1. OÜ Kodulehe Tellimine ja tellija vastutavad teineteise ees käesolevate tingimuste rikkumisega teisele poolele tekitatud kahju eest Eesti Vabariigis kehtivates õigusaktides sätestatud juhtudel ja ulatuses.</p>
                <p className="content">7.2. OÜ Kodulehe Tellimine ei vastuta tellijale tekitatud kahjude eest või teenuse osutamise viibimise eest juhul, kui kahju või teenuse osutamise viibimine on tingitud asjaolust, mida OÜ Kodulehe Tellimine ei saanud mõjutada, ei näinud ette ega võinud ette näha (vääramatu jõud).</p>
                <h2 className="title is-size-4 has-text-weight-bold is-bold-light">8. Vaidluste lahendamine</h2>
                <p className="content">8.1 Kui tellijal on teenuse osas pretensioone, tuleb need saata e-kirja teel aadressile kiur.jullis@gmail.com</p>
                <p className="content">8.2. OÜ Kodulehe Tellimine ja tellija vahel tekkinud vaidlused lahendatakse läbirääkimiste teel. Kokkuleppe mittesaavutamisel on tellijal õigus pöörduda oma õiguste kaitseks Tarbijakaitseametisse või kohtusse. Vaidluste ning käesolevates tingimustes mitte välja toodud küsimuste lahendamisel lähtutakse Eesti Vabariigis kehtivatest õigusaktidest.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Teenusetingimused
