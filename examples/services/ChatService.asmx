<%@ WebService Language="C#" Class="ChatService" %>

using System;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[System.Web.Script.Services.ScriptService]
public class ChatService : System.Web.Services.WebService {

    [WebMethod]
    public string[] GetBlacklist()
    {
        return new string[] { "noob", "mother", "youre", "kappa" };
    }
    
}