import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Logo from "./components/Header/Logo";
import Socials from "./components/Header/Socials";
import Feed from "./components/Feed/Feed";
import Post from "./components/Post";
// import CreatePost from "./components/CreatePost";
// import Admin from "./components/Admin";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollHeight: window.scrollY,
      posts: [
        {
          id: 1,
          title: "We gaan van start",
          preview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde, commodi facilis labore quidem vero? Repellendus ab ea ullam maiores ut asperiores, dignissimos cumque recusandae perferendis minus, ducimus voluptas sint! Accusamus quos, illum dolores in ad cum quas facilis laudantium fugit, dicta ipsam impedit ex dolor incidunt, sunt deserunt minima. Eos consequuntur autem minima, nam itaque velit, illo neque voluptas nulla rem aspernatur, cupiditate minus incidunt aliquam est voluptatum perferendis aut hic?",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde, commodi facilis labore quidem vero? Repellendus ab ea ullam maiores ut asperiores, dignissimos cumque recusandae perferendis minus, ducimus voluptas sint! Accusamus quos, illum dolores in ad cum quas facilis laudantium fugit, dicta ipsam impedit ex dolor incidunt, sunt deserunt minima. Eos consequuntur autem minima, nam itaque velit, illo neque voluptas nulla rem aspernatur, cupiditate minus incidunt aliquam est voluptatum perferendis aut hic? Inventore soluta unde rem perspiciatis laborum eligendi voluptatum eaque nihil similique illum quo praesentium ducimus dolorem, laboriosam natus consequatur nobis itaque ipsam deleniti debitis pariatur autem eius harum iste? Explicabo quod tenetur ipsam voluptatem totam voluptates animi illo, similique harum in velit. Molestiae, vitae doloribus? Minima quas hic vero, maxime cum fuga veritatis assumenda consequuntur nulla repudiandae minus eligendi culpa excepturi, officia est deleniti. Suscipit debitis eum iste veniam repudiandae adipisci voluptas ipsum nulla odio, nisi molestiae cumque pariatur non in voluptatibus, inventore est repellat illum? Amet, nulla repellendus molestias quod sed pariatur debitis eos nobis voluptatem velit facere cumque delectus dolorum culpa facilis sunt repellat sit architecto magnam! Labore voluptatem reprehenderit, nihil est nulla rem, omnis expedita tempora ut quae atque voluptatibus culpa consequatur eius, eum accusamus ad. A adipisci iste quidem sint nostrum labore blanditiis vel repellendus modi ipsa quis alias reprehenderit quo, et ducimus iure eveniet assumenda nobis fugiat officiis esse illo aut molestias. Accusamus possimus explicabo assumenda. Vel modi doloribus obcaecati voluptas odio sit alias molestiae autem quis maxime. Ducimus officiis necessitatibus, aliquam corporis, illum rem beatae, ipsam voluptatem repellat neque architecto amet aut. Culpa voluptate quas dolore dolorem sequi quis corporis magni eius, minima, iure, ab ipsam quod iste laudantium odio animi tempore placeat officia in! Cupiditate eos neque fuga asperiores tempora non ipsam ducimus ullam ea accusantium optio, qui veritatis tempore necessitatibus repudiandae expedita architecto dolor mollitia deserunt sed ab cumque! Nobis velit deserunt, fugit repellendus optio, non maxime rem saepe, ducimus quasi doloribus! Quidem distinctio qui veritatis expedita eveniet officiis, voluptatibus itaque nulla nesciunt cumque! Quia, unde ipsa assumenda excepturi rem cupiditate quisquam soluta sunt, eaque dolores modi? Modi accusamus natus ratione tempora quas libero ullam ex, quidem repellendus deleniti fugiat itaque quae expedita, doloribus corrupti corporis nemo quod amet asperiores voluptatum vel? Facere sapiente ad libero aliquid officiis delectus. Maiores, exercitationem expedita. Facilis alias repellendus optio voluptatum voluptas nam corrupti, nihil perferendis vero enim aperiam debitis labore facere assumenda quaerat reprehenderit sequi modi. Cum culpa dolores enim et ducimus vero dolorem magni provident est nobis ipsam numquam, minima architecto aliquid placeat repellat, laboriosam consequuntur fugit adipisci, sunt debitis natus ex ipsa! Accusamus vero asperiores delectus exercitationem quis rerum neque voluptatum enim vel excepturi consequatur, veritatis doloremque dignissimos sed dolores sint facere atque ipsam? Quis provident aspernatur quidem omnis, possimus labore amet voluptatibus, ducimus error at fuga sit modi aliquid fugit dolores recusandae eligendi, odio et minima ratione. Est, laudantium? Et sed impedit laborum voluptatum hic maxime vero harum dignissimos, magni eum, tempore maiores rerum mollitia, tempora repudiandae qui asperiores obcaecati.",
          image:
            "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
          author: "Max Altena",
          date: "2 Maart 2019"
        },
        {
          id: 2,
          title: "We zijn begonnen!",
          preview:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero exercitationem dolorum eum? Facere quae eum illum molestias? Recusandae quis possimus quo amet non exercitationem sunt magnam aut earum, similique consequuntur consectetur quibusdam omnis tempora itaque perferendis placeat nam dicta perspiciatis. Fuga dicta sequi illo reprehenderit, in quia rem minima quaerat, consectetur voluptas vel fugiat quasi. Iste ea consectetur eius deserunt ipsam ipsum! Libero commodi facilis quas, dicta aliquid autem dignissimos excepturi, dolore ullam ducimus ut doloribus veniam fuga exercitationem beatae unde deserunt, minima quae natus quisquam illum expedita animi perferendis?",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero exercitationem dolorum eum? Facere quae eum illum molestias? Recusandae quis possimus quo amet non exercitationem sunt magnam aut earum, similique consequuntur consectetur quibusdam omnis tempora itaque perferendis placeat nam dicta perspiciatis. Fuga dicta sequi illo reprehenderit, in quia rem minima quaerat, consectetur voluptas vel fugiat quasi. Iste ea consectetur eius deserunt ipsam ipsum! Libero commodi facilis quas, dicta aliquid autem dignissimos excepturi, dolore ullam ducimus ut doloribus veniam fuga exercitationem beatae unde deserunt, minima quae natus quisquam illum expedita animi perferendis? Blanditiis illo eligendi maiores in ea ex nostrum reprehenderit culpa veniam voluptates nam sapiente velit esse id, quam doloremque nisi. Tempore hic veniam, molestias necessitatibus ipsum cumque accusamus rem adipisci esse fugit assumenda illo qui quia consectetur, sed voluptates similique, recusandae repellendus quod. Rem nisi quisquam, non illo dolor magni molestiae vel recusandae error reprehenderit, ipsam corporis necessitatibus, ex excepturi commodi cum voluptatem quo ratione aut voluptatibus cumque voluptas magnam rerum doloremque. Explicabo nulla, quae tempora commodi mollitia molestias, exercitationem, officiis ex sunt hic praesentium minima perferendis. Sed rem voluptates totam magni, delectus iure qui! Minus, animi? Accusamus nisi esse ducimus qui voluptatem expedita quod aperiam nulla, nemo error dolorum temporibus aliquam iure tempore? Nisi, laboriosam hic dolores corrupti modi vitae error sunt? Fuga aspernatur quis, aut quaerat eum consequuntur nulla ad natus alias suscipit doloribus itaque dolores incidunt enim quibusdam inventore iste, quisquam aliquid facere ipsam dicta illo. Aliquid animi impedit illum, aut veniam dolores. Ipsum eum distinctio deserunt perspiciatis accusantium rerum itaque, eos corporis sunt aut ipsam minima vero expedita. Sint ducimus at vel possimus sapiente, aut assumenda modi? Aspernatur molestias reiciendis ullam laborum voluptas rerum temporibus minima voluptate optio ratione voluptatibus qui dolorum eaque molestiae provident voluptatem neque quo, libero consequuntur cum maxime! Velit numquam iusto hic. Iure veritatis, quasi nobis ad corporis quaerat ab suscipit quis nam doloremque dicta architecto beatae harum quidem ex at adipisci necessitatibus sit corrupti eum dolorum. Possimus quod amet recusandae debitis. Quos non ut neque consectetur, reiciendis nobis sapiente veniam consequatur soluta voluptatum cupiditate suscipit at aliquid accusantium! A voluptas ab consectetur. Itaque nemo eaque exercitationem temporibus sapiente cupiditate voluptatem eum qui similique soluta! Numquam laborum repellat, vitae omnis cumque perspiciatis autem veritatis ipsam voluptatem provident qui optio ipsum alias ea dolorem magni. Voluptates libero nisi porro. Odit aperiam optio nesciunt dolorum aliquid, quae saepe atque, esse molestiae totam beatae recusandae iure veniam aspernatur. Facilis nam sit voluptatibus pariatur exercitationem accusamus laboriosam minima, deleniti magni iure adipisci odit tempora vero corporis incidunt? Magni voluptates atque ad facilis placeat explicabo rem commodi, ducimus quo itaque, suscipit labore illo delectus eaque recusandae repudiandae sunt vel inventore. Accusantium numquam magni officia laborum architecto quae voluptas, itaque reiciendis modi, ducimus non ad culpa inventore vitae dolores! Odit quia porro odio, commodi reiciendis ut minima cum, voluptatibus, explicabo perferendis ad cumque! Cupiditate architecto, molestias iusto saepe possimus facere perspiciatis veritatis cum, quidem aliquam beatae natus similique! Optio voluptatem consequatur maiores inventore odit exercitationem quasi alias iusto.",
          image:
            "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
          author: "Max Altena",
          date: "3 Maart 2019"
        },
        {
          id: 3,
          title: "Het gaat gebeuren, want we doen mee!",
          preview:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur assumenda delectus nam enim aut dolores, modi soluta ex, tenetur sunt perspiciatis, porro incidunt nesciunt sed dolorem cum minima laborum obcaecati provident. Dolorum, iste aliquam optio nihil atque eum dicta similique sit. Ipsam eligendi reiciendis explicabo asperiores cumque doloribus at ea delectus facilis commodi ullam iure, amet ut magnam aut velit dolorem?",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur assumenda delectus nam enim aut dolores, modi soluta ex, tenetur sunt perspiciatis, porro incidunt nesciunt sed dolorem cum minima laborum obcaecati provident. Dolorum, iste aliquam optio nihil atque eum dicta similique sit. Ipsam eligendi reiciendis explicabo asperiores cumque doloribus at ea delectus facilis commodi ullam iure, amet ut magnam aut velit dolorem? Animi expedita libero, quibusdam magnam nam cumque numquam quos et ipsum eius adipisci dolorem optio laboriosam qui vero inventore eligendi perferendis aspernatur. Ullam mollitia dolore aperiam iure doloribus corporis voluptatum perspiciatis autem alias, quae doloremque, quo dolorum voluptatibus sed ipsa nulla pariatur impedit ex dolores architecto. Vero, placeat, porro sint culpa hic inventore harum doloribus aliquid corrupti sapiente minima commodi aspernatur minus est possimus ea odio a sit veniam delectus amet. Numquam, corporis ex. Repudiandae odit suscipit ipsam enim voluptatem, hic, qui modi animi obcaecati, temporibus fugiat at? Qui voluptatum placeat ullam. Iusto, officia, quibusdam aliquam voluptates dolor fuga tempore a harum aspernatur non placeat eligendi id minima in neque! Cum modi eveniet mollitia libero nam architecto ad. Obcaecati velit vel quo molestias fuga qui doloribus eveniet corrupti. Voluptatum ea magni eius nobis necessitatibus, laboriosam incidunt excepturi commodi repellat delectus facere amet earum cum provident debitis cumque vel quasi ipsam libero, ut consequuntur nesciunt. Cum rem accusamus neque nesciunt exercitationem perferendis itaque aliquam molestias delectus illo excepturi iusto amet temporibus earum totam nulla autem inventore, nostrum molestiae cumque aliquid laborum. Quidem possimus dignissimos et amet id illum sint ipsum eum rem debitis, quae distinctio, ducimus aperiam perspiciatis fugit ipsam culpa! Nesciunt eveniet totam animi, ut harum commodi natus dolores iste facere aliquam, autem vero nam. Beatae natus, reiciendis suscipit magnam nihil ex voluptates consectetur. Cumque optio officia laborum dolores enim nisi quia obcaecati minima, suscipit autem necessitatibus dignissimos neque similique quisquam. Dolores explicabo quae officiis adipisci accusamus quaerat quidem? Dolorum facilis corporis voluptatem omnis quia assumenda dolores pariatur recusandae beatae molestias quae rerum repudiandae ducimus, tempora sequi, accusantium, quisquam illum? Enim beatae dolorem optio aliquam minus numquam laudantium officiis voluptatem fuga, expedita omnis qui repellat error nihil ducimus animi quasi explicabo vero praesentium eligendi, itaque inventore incidunt nam. Commodi sed cumque quae sapiente tenetur omnis facilis enim, magnam voluptas voluptatem vero soluta iste fuga doloribus assumenda earum nisi, molestiae fugiat alias iusto maiores vitae. Dolorum rerum, neque, ab cumque voluptatem unde obcaecati doloremque distinctio nulla, maiores excepturi deleniti nihil reprehenderit provident quidem. Sit voluptatem, ad ea aspernatur ut tenetur exercitationem saepe eum nulla, blanditiis libero ab non eius voluptas numquam, labore minima accusamus. Sint minima amet voluptates ipsam, consequatur ab. Nemo aperiam magni officiis odit, autem accusantium soluta beatae reiciendis quaerat nulla pariatur, quo a blanditiis aspernatur id rerum perspiciatis iusto enim cum veniam! Nemo in soluta libero ut consequuntur recusandae laboriosam veniam totam, at dolor illo sit aliquam odit praesentium doloremque doloribus quas sunt. Facere adipisci quidem iste odit laboriosam ad soluta sapiente nihil voluptates, libero fuga inventore. Asperiores ex ipsum aliquid harum non, ut natus deserunt deleniti.",
          image:
            "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
          author: "Max Altena",
          date: "4 Maart 2019"
        },
        {
          id: 4,
          title: "Ik kan geen titels meer bedenken...",
          preview:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id soluta dolores porro unde dolorem tenetur praesentium molestiae! Distinctio quia quas nihil odio at eos maiores. Quisquam, et doloribus. Sit architecto numquam modi quis aperiam perferendis porro repudiandae sed, iusto ex delectus ullam natus beatae doloribus repellendus libero saepe ab laboriosam suscipit quod omnis nostrum sequi. Porro optio modi obcaecati. Accusamus porro ad expedita. Velit, totam eum! Consequuntur, vero recusandae. Enim at soluta doloribus amet officiis in voluptatum sint officia suscipit quos voluptatibus cum nihil, quod expedita deleniti hic minima nulla aliquam quaerat ipsam fuga pariatur.",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id soluta dolores porro unde dolorem tenetur praesentium molestiae! Distinctio quia quas nihil odio at eos maiores. Quisquam, et doloribus. Sit architecto numquam modi quis aperiam perferendis porro repudiandae sed, iusto ex delectus ullam natus beatae doloribus repellendus libero saepe ab laboriosam suscipit quod omnis nostrum sequi. Porro optio modi obcaecati. Accusamus porro ad expedita. Velit, totam eum! Consequuntur, vero recusandae. Enim at soluta doloribus amet officiis in voluptatum sint officia suscipit quos voluptatibus cum nihil, quod expedita deleniti hic minima nulla aliquam quaerat ipsam fuga pariatur. Quaerat dolor, consequatur quas voluptatibus magni quo architecto, culpa incidunt, vel exercitationem enim laudantium quisquam laboriosam quos molestiae voluptatum dolorem nobis eius neque. Ut possimus voluptate velit, autem maiores asperiores commodi sint id expedita! Iusto ipsam eos reiciendis cumque officia aliquid laboriosam odit rem, saepe quos quia itaque sapiente maiores vitae enim aperiam nam totam officiis sed pariatur dicta. Laborum, ipsam architecto quos, corrupti accusantium ipsum nobis rem impedit fugiat ut obcaecati recusandae velit cumque, laudantium eaque pariatur minima quae unde? Aspernatur modi illo deleniti unde amet iure rem architecto, sit quas ipsum ex alias sunt saepe dolor quibusdam laudantium eligendi commodi omnis, exercitationem dolorum accusantium maiores earum! Saepe soluta officiis quis quibusdam! Minima, deserunt! Excepturi quam esse, illum vero ipsam neque sed nostrum aspernatur veritatis placeat necessitatibus cumque debitis fugiat voluptate in voluptatem nulla officiis obcaecati! Earum, repudiandae perspiciatis sapiente rerum, assumenda est labore possimus cum aperiam autem nulla necessitatibus quos voluptates asperiores dolore molestias? Ipsam tempora illum hic corporis minus, impedit laborum. Voluptatum consequuntur perspiciatis, ipsam veritatis obcaecati deleniti iusto cum esse, voluptas repudiandae vel similique quo! Magni minus voluptatum ullam velit dolor fugit iste architecto deserunt! Adipisci porro facere dolorem assumenda sint culpa molestias quae quis perspiciatis quisquam vitae eaque consequatur voluptate ut facilis voluptatibus molestiae et dolore illo, iste nam modi perferendis deserunt. Veniam accusamus explicabo cumque neque distinctio nesciunt officiis expedita ipsum. Deserunt, quae dolor corrupti hic porro numquam illo dolorum nulla. Praesentium ab veniam libero eaque harum illum, omnis corporis numquam necessitatibus vero, est soluta quidem ea nobis saepe temporibus recusandae ad animi sit? Dicta maiores nisi quis porro magnam sint iure accusamus, voluptas doloremque quibusdam mollitia adipisci culpa officia quae tempora eveniet natus ad modi assumenda dolorem reiciendis dolore! Assumenda consectetur debitis maxime cum doloremque doloribus, commodi ab vel explicabo officia quo nostrum quam, quae exercitationem nobis eius eaque ad? Sapiente dolore id rerum a illo ex eius exercitationem officiis laboriosam, modi libero consequuntur veritatis hic fugit neque nemo? Earum tenetur quae laudantium voluptatum vitae aspernatur eveniet. Magni, ipsum totam culpa aliquid, dignissimos praesentium ut ullam ipsam hic inventore ducimus tenetur eligendi perferendis, molestias est rerum tempora laborum rem maxime. Accusantium ad aspernatur ut, provident laboriosam, amet dolore labore corporis laudantium quae cum? Neque, possimus! Adipisci vitae possimus nemo, doloremque voluptatibus id dolorem nam vero magni. Fugiat voluptates tenetur quos rem dolorem, ipsum temporibus. In numquam officia quas, nesciunt consequatur eaque, dolorem accusamus, beatae doloribus labore rerum?",
          image:
            "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
          author: "Max Altena",
          date: "5 Maart 2019"
        },
        {
          id: 5,
          title: "Dus doen we dit gewoon, lorem ipsum dolor",
          preview:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nobis accusamus voluptate in. Dolorem quos omnis vel aut asperiores eos, tempore alias voluptate debitis repudiandae neque suscipit dicta quisquam veritatis expedita in ex animi eaque necessitatibus ad laudantium obcaecati ratione. Optio doloribus id rem facilis ex cumque inventore earum velit eius, possimus, accusantium praesentium nisi voluptate assumenda consectetur eveniet dolore fuga, quaerat labore necessitatibus qui modi itaque quis!",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nobis accusamus voluptate in. Dolorem quos omnis vel aut asperiores eos, tempore alias voluptate debitis repudiandae neque suscipit dicta quisquam veritatis expedita in ex animi eaque necessitatibus ad laudantium obcaecati ratione. Optio doloribus id rem facilis ex cumque inventore earum velit eius, possimus, accusantium praesentium nisi voluptate assumenda consectetur eveniet dolore fuga, quaerat labore necessitatibus qui modi itaque quis! Dicta libero esse minima nobis eos rerum atque, quam inventore, quod temporibus consequatur aperiam, aliquam dignissimos non earum! Debitis iusto minus sapiente expedita delectus quo amet. Aliquid modi sed sequi reprehenderit dignissimos numquam fugiat fugit porro ratione a consequatur accusantium dolores atque nihil, voluptatem dolor iusto, corrupti repellendus qui molestiae cum velit odio cupiditate quos. Consectetur minima voluptates laboriosam ullam nemo cum rerum dolor molestiae exercitationem, vitae eius soluta consequuntur ad possimus et nulla doloribus itaque obcaecati rem saepe amet aut quas non. Libero nobis quod obcaecati ab minus voluptas similique ullam deserunt dolores sed porro, suscipit possimus maxime neque quos eligendi voluptates provident. Unde, consectetur? Officiis assumenda illo consectetur consequatur eveniet neque et repudiandae ab harum rerum! Nulla distinctio corrupti praesentium modi illum error vero natus molestias alias nobis aperiam minus, quae tenetur aliquid dicta officia quis qui fugit, officiis eveniet voluptas? Quam, voluptatum. Corrupti rem vero fugiat perferendis eius, eum nesciunt adipisci laboriosam numquam, itaque, iusto mollitia quod consequatur deserunt hic libero enim incidunt! Atque a at quam vitae, incidunt dolorum, reprehenderit aut error consequuntur quas asperiores placeat nisi maiores in obcaecati voluptate quia beatae? Asperiores voluptates corporis velit accusamus enim ipsam. Ipsam repudiandae, eaque sunt dolorem nobis quae, earum illum, tempora in possimus nemo et. Nostrum explicabo dolorum iure laborum animi vero enim, accusamus ab incidunt recusandae culpa cumque quis voluptatum velit tempora? Soluta quidem veniam maxime reprehenderit at enim, a voluptatem alias quasi voluptatibus nesciunt et saepe! Qui, nesciunt tempora quos alias est autem optio nemo architecto velit corrupti quod perspiciatis dolorem praesentium sit ducimus laborum cumque similique? Corrupti similique eum blanditiis doloremque amet molestias ipsa ullam ut velit voluptas nostrum rem perferendis quidem excepturi, voluptates quos vitae ex distinctio deleniti soluta nihil temporibus quibusdam error! Facere assumenda similique aperiam aut atque nostrum suscipit, eveniet repellat, non deleniti fugiat debitis obcaecati? Recusandae rem aliquam voluptates ab! Aperiam, aliquid? Tempore commodi sequi ipsam debitis labore. Exercitationem ab debitis dolorem ipsam eaque qui quis deserunt? Possimus, explicabo necessitatibus sapiente, similique repellendus modi quis aliquid iusto magni quia voluptatibus voluptatem qui a temporibus atque at? Sint reiciendis magnam dolor laboriosam architecto nobis sed. Qui ipsam exercitationem, fugiat hic, veritatis nesciunt dolor reprehenderit ipsum nisi nam praesentium dolores cupiditate accusamus ducimus culpa suscipit dignissimos? Itaque labore earum, odit impedit, totam aut fugiat doloremque, sequi sint repellendus laudantium. Sunt, necessitatibus omnis consequatur tenetur repellendus iure id deserunt accusantium blanditiis aliquam adipisci perferendis voluptatem reprehenderit ipsum assumenda. Vitae quas, possimus eum, soluta nostrum voluptas, nihil aut libero sapiente quos in debitis aspernatur. Perferendis rerum tenetur commodi perspiciatis natus ea iste porro illum dolorum veniam?",
          image:
            "https://www.gravatar.com/avatar/2bd431953d5fdbf5bc245dce12944a9b",
          author: "Max Altena",
          date: "6 Maart 2019"
        }
      ]
    };

    window.onscroll = () => {
      this.setState({ scrollHeight: window.scrollY });
    };
  }
  render() {
    const { scrollHeight, posts } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <header className="hide-on-med-and-down">
            <Logo />
            <Socials />
          </header>
          <header className="hide-on-large-only">
            <Logo />
            <Socials />
          </header>
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Feed posts={posts} {...props} />}
              />
              <Route
                path="/bericht/:id"
                render={props => <Post posts={posts} {...props} />}
              />
              {/* <Route path="/create" component={CreatePost} /> */}
              {/* <Route path="/admin" component={Admin} /> */}
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </div>
          <i
            className={
              scrollHeight >= 25
                ? "material-icons scrollToTop scrolled"
                : "material-icons scrollToTop"
            }
            onClick={() => scroll.scrollToTop()}
          >
            keyboard_arrow_up
          </i>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
