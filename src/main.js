import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
  data: {
    sections: [
      {
        id: 1,
        title: "Email",
        icon: "email",
        description:
          "Access your GAA email, OneDrive and other Office 365 functionality",
        link: "http://mail.gaa.ie",
        newWindow: true
      },
      {
        id: 2,
        title: "GMS",
        icon: "gms",
        description:
          "Games Management System: Manage your GAA Club Membership, Registrations, Communications and Fixturess",
        link: "https://people.gaa.ie",
        newWindow: true
      },
      {
        id: 3,
        title: "Vetting",
        icon: "childwelfare",
        description: "Access the GAA Vetting information and eVetting forms",
        link: "https://www.gaa.ie/the-gaa/child-welfare-and-protection/vetting",
        newWindow: true
      },
      {
        id: 4,
        title: "Player injury Fund",
        icon: "insurance",
        description: "Make a Player Injury Fund claim",
        link:
          "https://gaabenefitsportal.dwfclaims.com/Security/Login?returnUrl=%2F",
        newWindow: true
      },
      {
        id: 5,
        title: "GRMA",
        icon: "gmra",
        description: "GAA Membership and Rewards programme",
        link: "https://grma.gaa.ie",
        newWindow: true
      },
      {
        id: 6,
        title: "Player Transfer System",
        icon: "playertransfer",
        description: "Complete Player transfers",
        link: "http://pts.gaa.ie/login",
        newWindow: true
      },
      {
        id: 7,
        title: "Games Development",
        icon: "elearning",
        description: "Portal for Games Development Staff",
        link: "https://activity.gaa.ie/accounts/sign_in",
        newWindow: true
      },
      {
        id: 8,
        title: "National Club Draw",
        icon: "purchasepower",
        description: "Access information relating to the National Club Draw",
        link: "https://www.gaa.ie/my-gaa/administrators/national-club-draw",
        newWindow: true
      },
      {
        id: 9,
        title: "Tickets",
        icon: "tickets",
        description: "Purchase tickets for upcoming GAA matches",
        link: "https://gaa.tickets.ie/",
        newWindow: true
      },
      {
        id: 10,
        title: "Season Tickets",
        icon: "membership",
        description: "Access the GAA Season Ticket portal",
        link: "https://seasonticket.gaa.ie/login?redirectTo=%2Fdashboard",
        newWindow: true
      },
      {
        id: 11,
        title: "eLearning",
        icon: "elearning",
        description: "Access to online GAA Learning resources",
        link: "https://learning.gaa.ie/",
        newWindow: true
      },
      {
        id: 12,
        title: "Purchase Power",
        icon: "purchasepower",
        description: "Access to the GAA’s national purchasing programme",
        link: "https://www.gaa.ie/my-gaa/administrators/purchase-power",
        newWindow: true
      },
      {
        id: 13,
        title: "GDPR Repository",
        icon: "gdpr",
        description: "Support materials relating to Data Protection",
        link:
          "https://crokepark-my.sharepoint.com/personal/dataprotection_gaa_ie/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdataprotection%5Fgaa%5Fie%2FDocuments%2FGDPR%20Repository&parent=",
        newWindow: true
      },
      {
        id: 14,
        title: "GAA Newsletter",
        icon: "newsletter",
        description: "Download the most recent GAA Newsletter",
        link: "/https://www.gaa.ie/downloads/newsletters/",
        newWindow: true
      },
      {
        id: 15,
        title: "GAA Fixtures & Results",
        icon: "clubdraw",
        description: "Access to GAA Fixtures and Results",
        link: "https://www.gaa.ie/fixtures-results/",
        newWindow: false
      }
    ],
    notifications: [
      {
        id: 1,
        title: "article 1",
        date: "24 Jan",
        time: "7:01 pm",
        description:
          "The deadline for submitting expenses is this Friday 11th October."
      },
      {
        id: 2,
        title: "article 2",
        date: "28 Jan",
        time: "10:00 am",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 3,
        title: "article 3",
        date: "1 Feb",
        time: "1:00 pm",
        description: "Donec suscipit, nisi non venenatis venenatis."
      },
      {
        id: 4,
        title: "article 4",
        date: "14 Feb",
        time: "9:00 am",
        description:
          "Donec bibendum massa a eros dignissim, non commodo lacus sollicitudin."
      },
      {
        id: 5,
        title: "article 5",
        date: "18 Feb",
        time: "3:30 pm",
        description: "Pellentesque eu venenatis nunc, Curabitur ac risus."
      },
      {
        id: 6,
        title: "article 6",
        date: "24 Feb",
        time: "5:14 pm",
        description: "Cras a auctor veli, Aenean lacinia auctor metus."
      }
    ]
  }
}).$mount('#app');
