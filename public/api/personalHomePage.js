const ka_ta_log = "";
const name = "/name";
const avatar = "/avatar";
const link = "/link";
const messenger = "/messenger";
const pages = "/pages";
const listFriend = "/list-friend";

function GetDataBase(){
    const xml = new XMlHttpRequest();
    const router ="/main-data-base";
    const url = ka_ta_log + routes;
    xml.open("POST",url,fasle);
    xml.send("");
    const returning = xml.responseText;
    if(returning != "")return JSON.parse(returning);
}

class PersonalHomePage extends React.Component{
	constructor(super){
		super(props);
		this.state={
			Valid: false,
			Name: "",
			Avatar: "",
			IsLogin: false,
			IsLogout: true,
			Link:"",
			ListFriend:{},
			Notifications: {},
			Messenger: 0,
			Pager: {}
		};
	}
	GetDataBase(){
		const xml = new XMlHttpRequest();
		const routes ="/main-data-base";
		const url = ka_ta_log + routes;
		xml.open("POST",url,fasle);
		xml.send("");
		const returning = xml.responseText;
		if(returning != "")return JSON.parse(returning);
	}



	HandleDataBase(){
		const db = this.GetDataBase();
		if(typeof(db) != "Object"){
			this.state ={
				Valid: true,
				Name: db.Name,
				Avatar: db.Avatar,
				IsLogin: db.IsLogin,
				IsLogout: db.IsLogput,
				Link: db.Link,
				ListFriend: db.ListFriend,
				Notifications: db.Notifications,
				Messenger: db.Messenger,
				Pager: db.Paper
		}}
	}
}

const ka_ta_log = ""
