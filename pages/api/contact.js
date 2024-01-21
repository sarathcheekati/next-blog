import { MongoClient } from "mongodb";
const contact = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid Input" });
    }

    const newMessage = { email, name, message };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://cheekatisarath:Saketh1234@cluster0.vnp9m5r.mongodb.net/shop?retryWrites=true&w=majority"
      );
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message || "Connection failed to database" });
    }

    const db = client.db("my-site");
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      return res.status(500).json({
        message: error.message || " failed to store data in database",
      });
    }
    client.close();
    return res
      .status(201)
      .json({ message: "Successfully stored message", message: newMessage });
  }
};

export default contact;
