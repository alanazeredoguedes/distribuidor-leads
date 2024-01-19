import novo_crm from "~/components/ts/integracoes/novo_crm";
import portal_corretor from "~/components/ts/integracoes/portal_corretor";
import hypnobox from "~/components/ts/integracoes/hypnobox";
import anapro from "~/components/ts/integracoes/anapro";
import junix from "~/components/ts/integracoes/junix";
import itaplan from "~/components/ts/integracoes/itaplan";
import capys from "~/components/ts/integracoes/capys";
import email_smtp from "~/components/ts/integracoes/email_smtp";
import cvcrm from "~/components/ts/integracoes/cvcrm";



const integrations = {
    'novo_crm': novo_crm,
    'portal_corretor': portal_corretor,
    'hypnobox': hypnobox,
    'anapro': anapro,
    'cvcrm': cvcrm,
    'capys': capys,
    'email_smtp': email_smtp,


    'junix': junix,
    'itaplan': itaplan,
};

export default integrations;