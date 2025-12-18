const crypto = require("crypto");

const algorithm = "aes-256-gcm";
const ivLength = 16;
const saltLength = 64;
const tagLength = 16;
const tagPosition = saltLength + ivLength;
const encryptedPosition = tagPosition + tagLength;

// Derive key from password
const getKey = (salt) => {
  return crypto.pbkdf2Sync(
    process.env.ENCRYPTION_KEY,
    salt,
    100000,
    32,
    "sha512"
  );
};

// Encrypt data
exports.encrypt = (plaintext) => {
  const salt = crypto.randomBytes(saltLength);
  const iv = crypto.randomBytes(ivLength);
  const key = getKey(salt);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([
    cipher.update(String(plaintext), "utf8"),
    cipher.final(),
  ]);

  const tag = cipher.getAuthTag();

  return Buffer.concat([salt, iv, tag, encrypted]).toString("hex");
};

// Decrypt data
exports.decrypt = (ciphertext) => {
  const stringValue = Buffer.from(String(ciphertext), "hex");

  const salt = stringValue.slice(0, saltLength);
  const iv = stringValue.slice(saltLength, tagPosition);
  const tag = stringValue.slice(tagPosition, encryptedPosition);
  const encrypted = stringValue.slice(encryptedPosition);

  const key = getKey(salt);

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.setAuthTag(tag);

  return decipher.update(encrypted) + decipher.final("utf8");
};

// Hash sensitive data (one-way)
exports.hash = (data) => {
  return crypto.createHash("sha256").update(String(data)).digest("hex");
};