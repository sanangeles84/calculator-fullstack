const request = require("supertest");
const app = require("../../app");

require("dotenv").config();
const token = process.env.API_KEY;

describe("GET /about", () => {
	it("should return info about the api", async () => {
		return request(app)
			.get("/about")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((res) => {
				expect(res.statusCode).toBe(200);
			});
	});
});

describe("GET /sum/123/456", () => {
	test("try to sum two numbers", async () => {
		return request(app)
			.get("/sum/123/456")
			.set("Authorization", `Bearer ${token}`)
			.expect(200)
			.then((res) => {
				expect(res.body.result).toBe(579);
			});
	});
});

describe("GET /subtract/123/456", () => {
	test("try to subtract two numbers", async () => {
		return request(app)
			.get("/subtract/123/456")
			.set("Authorization", `Bearer ${token}`)
			.expect(200)
			.then((res) => {
				expect(res.body.result).toBe(-333);
			});
	});
});

describe("GET /multiply/123/456", () => {
	test("try to multiply two numbers", async () => {
		return request(app)
			.get("/multiply/123/456")
			.set("Authorization", `Bearer ${token}`)
			.expect(200)
			.then((res) => {
				expect(res.body.result).toBe(56088);
			});
	});
});

describe("GET /divide/333/111", () => {
	test("try to divide two numbers", async () => {
		return request(app)
			.get("/divide/333/111")
			.set("Authorization", `Bearer ${token}`)
			.expect(200)
			.then((res) => {
				expect(res.body.result).toBe(3);
			});
	});
});
