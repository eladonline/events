import React from "react";
import EventPage from "src/components/eventPage/EventPage.js";
import data from "src/data/products/pimax/data.json";

const ValveIndex = () => {
  return <EventPage {...data} />;
};

export default ValveIndex;

/**
 
      {
        "page": "pimax",
        "service": "Pimax 8K",
        "id": "1112AM-PX",
        "background": "/static/image/services/pimax/pimax_8_min.jpg",
        "description": {
          "text": "ה- Pimax 8K הוא תצוגה המותקנת בראש מציאות מדומה. הוא כולל שני תצוגות 4K, אחת לכל עין, עם שדה נוף שפורסם של 200 מעלות. עם זאת, ה- Pimax 8K אינו משתמש ברזולוציית 8K UHD הרגילה הנפוצה ביותר הכוללת פי ארבעה פיקסלים כמו 4K UHD. מכיוון ש- Pimax 8K מכיל שני תצוגות UHD 4K, יש לו רק מחצית מכמות הפיקסלים כמו זו של 8K UHD. בנוסף, עקב מגבלות רוחב הפס בכבל החיבור, כניסת האוזניות מוגבלת ל 2560 × 1440 לכל אחת מהתצוגות. לאחר מכן זה משודרג במכשיר לרזולוציה הממשית של התצוגה",
          "detailes": {
            "manufacture": "Pimax",
            "mfctrUrl": "https://pimaxvr.com/",
            "supplyTime": 14,
            "warranty": 1,
            "price": 3788
          }
        },
        "img": [
          { "src": "/static/image/services/pimax/plays.jpg" },
          { "src": "/static/image/services/pimax/plays_2.jpg" },
          { "src": "/static/image/services/pimax/plays_3.jpg" },
          { "src": "/static/image/services/pimax/plays_4.jpg" }
        ],
        "warrning": "דרוש מחשב תומך"
      }


 */
