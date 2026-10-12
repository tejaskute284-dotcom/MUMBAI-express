/**
 * seed.js - Fictional Chat Seed Data (F7, Section 6.2)
 * Contains realistic Indian family, community, and society conversations.
 * Strictly zero real personal identities or public figures.
 */

export const INITIAL_CHATS = {
  bot: {
    id: "bot",
    name: "MUMBAI express",
    sub: "Official Business Account · AI Fact Checker",
    avatar: "🛡️",
    color: "linear-gradient(135deg, #00a884, #00796b)",
    isBot: true,
    pinned: true,
    unread: 0,
    time: "Today",
    lastMsg: "Official Fact-Check Assistant ready.",
    messages: [
      {
        id: "b1",
        sender: "MUMBAI express",
        isMe: false,
        text: "*MUMBAI express Fact-Check Assistant*\n\nForward any viral message, health rumor, policy claim, or upload a circular screenshot/audio to verify against authoritative fact-checkers (IFCN, PIB, WHO, Wikipedia).",
        time: "Today",
        status: ""
      }
    ]
  },
  sharma: {
    id: "sharma",
    name: "Tech & News Circle 💻",
    sub: "Ananya, Rajesh, Priya, Rohan, You",
    avatar: "💻",
    color: "#0f766e",
    isBot: false,
    pinned: false,
    unread: 2,
    time: "9:02 am",
    lastMsg: "Rajesh: Yes please, always verify before circulating.",
    messages: [
      {
        id: "m_sharma_1",
        sender: "Ananya",
        isMe: false,
        forwarded: "many",
        text: "नींबू का रस और गर्म पानी पीने से 48 घंटे में कैंसर ठीक हो जाता है! सभी ग्रुप में शेयर करें 🙏",
        time: "8:59 am",
        status: ""
      },
      {
        id: "m_sharma_2",
        sender: "You",
        isMe: true,
        quoted: {
          author: "Ananya",
          text: "नींबू का रस और गर्म पानी पीने से 48 घंटे में कैंसर ठीक हो जाता है..."
        },
        text: "Ananya, let's not forward unverified medical claims. Let me check this with MUMBAI express.",
        time: "9:00 am",
        status: "✓✓"
      },
      {
        id: "m_sharma_3",
        sender: "Rajesh",
        isMe: false,
        text: "Yes please, always verify before circulating.",
        time: "9:02 am",
        status: ""
      }
    ]
  },
  rishtedar: {
    id: "rishtedar",
    name: "Community Hub 🌐",
    sub: "Kiran, Manoj, Vikram, Neha, You",
    avatar: "🌐",
    color: "#b45309",
    isBot: false,
    pinned: false,
    unread: 1,
    time: "Yesterday",
    lastMsg: "Manoj: Is this authentic? I use UPI daily for business.",
    messages: [
      {
        id: "m_rish_1",
        sender: "Kiran",
        isMe: false,
        forwarded: "many",
        text: "NPCI has introduced 2 percent transaction fee on normal UPI payments starting this week. Forward to everyone before midnight!",
        time: "Yesterday",
        status: ""
      },
      {
        id: "m_rish_2",
        sender: "Manoj",
        isMe: false,
        text: "Is this authentic? I use UPI daily for business.",
        time: "Yesterday",
        status: ""
      }
    ]
  },
  society: {
    id: "society",
    name: "City News & Alerts 📢",
    sub: "Editorial Desk, Civic Admin, Community, You",
    avatar: "📢",
    color: "#334155",
    isBot: false,
    pinned: false,
    unread: 0,
    time: "Yesterday",
    lastMsg: "Civic Admin: Overhead water pipeline maintenance scheduled...",
    messages: [
      {
        id: "m_soc_1",
        sender: "Civic Admin",
        isMe: false,
        text: "Dear Residents, overhead water pipeline maintenance scheduled for Saturday 10:00 AM to 2:00 PM. Please plan accordingly.",
        time: "Yesterday",
        status: ""
      }
    ]
  },
  friends: {
    id: "friends",
    name: "Project Team 🚀",
    sub: "Arjun, Kabir, Priya, You",
    avatar: "🚀",
    color: "#701a75",
    isBot: false,
    pinned: false,
    unread: 0,
    time: "10:45 am",
    lastMsg: "Kabir: Anyone up for weekend meetup?",
    messages: [
      {
        id: "m_fr_1",
        sender: "Kabir",
        isMe: false,
        text: "Anyone up for weekend meetup?",
        time: "10:45 am",
        status: ""
      }
    ]
  },
  mummy: {
    id: "mummy",
    name: "Priya Sharma 👤",
    sub: "online",
    avatar: "👤",
    color: "#be185d",
    isBot: false,
    pinned: false,
    unread: 0,
    time: "1:02 pm",
    lastMsg: "Did you check the latest update?",
    messages: [
      {
        id: "m_mum_1",
        sender: "Priya",
        isMe: false,
        text: "Did you check the latest update?",
        time: "1:02 pm",
        status: ""
      }
    ]
  },
  papa: {
    id: "papa",
    name: "Rajesh Verma 👤",
    sub: "last seen today at 11:15 am",
    avatar: "👤",
    color: "#1d4ed8",
    isBot: false,
    pinned: false,
    unread: 0,
    time: "11:15 am",
    lastMsg: "Someone sent a forward claiming free railway travel...",
    messages: [
      {
        id: "m_pap_1",
        sender: "Rajesh",
        isMe: false,
        text: "Someone sent a forward claiming free railway travel for senior citizens. Check if it is official.",
        time: "11:15 am",
        status: ""
      }
    ]
  }
};
