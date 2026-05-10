"use client";
        <div
          style={{
            background: "#dcfce7",
            marginTop: "30px",
            padding: "25px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#444", fontSize: "18px" }}>
            Tahmini Fiyat
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#15803d",
              marginTop: "10px",
            }}
          >
            {fiyat.toLocaleString("tr-TR")} TL
          </h2>
        </div>

        <a
          href={`https://wa.me/905555555555?text=${whatsappMesaj}`}
          target="_blank"
          style={{
            display: "block",
            background: "#16a34a",
            color: "white",
            textAlign: "center",
            padding: "18px",
            borderRadius: "18px",
            marginTop: "30px",
            textDecoration: "none",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          WhatsApp'tan Teklif Al
        </a>

        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "gray",
            fontSize: "14px",
          }}
        >
          Fiyatlar ortalama hesaplanır. Net fiyat keşif sonrası belirlenir.
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid #ddd",
  fontSize: "18px",
};