/* Shared settings for index.html and scan.html */
/* =========================================================
   ⚙️  EDIT THESE SETTINGS BEFORE GOING LIVE
   ========================================================= */
window.CONFIG = {
  // ← paste your Google Apps Script Web App URL here (see SETUP.md). Leave "" to run without a sheet.
  sheetUrl: "https://script.google.com/macros/s/AKfycbxEvaAMalQ5JiXJjx-avfMHHCi0DiIgsnfzFMMaQ0NCg5pAhB8IuMCjd4dpUJEcwrym/exec",

  upiId:   "9009437767@ibl",            // PhonePe UPI ID (from the official PhonePe QR)
  payeeName: "JITENDR KUMAR SHARMA",   // must match the bank account name shown in UPI apps
  razorpayKey: "",                      // ← optional: "rzp_live_xxxx" to enable card/netbanking
  organiserWhatsApp: "918269737767",    // where booking confirmations are sent
  eventStart: "2026-10-16T19:00:00+05:30",
  passes: [
    { id:"single", name:"Single Night", sub:"Entry for 1 person, 1 night", price:499, admit:1, nights:1,
      perks:["Entry to any one night","Live DJ & Garba","Access to food stalls"] },
    { id:"couple", name:"Couple Pass", sub:"Entry for 2 people, 1 night", price:799, admit:2, nights:1, badge:"MOST LOVED",
      perks:["Entry for 2 to any one night","Live DJ & Garba","Photo booth access"] },
    { id:"family", name:"Family Pass", sub:"Up to 4 people, 1 night", price:999, admit:4, nights:1, badge:"BEST VALUE",
      perks:["Entry for 4 to any one night","Family-zone access","Kids under 5 free"] },
  ]
};
/* ========================================================= */
