import { calculatePasswordStrength } from "../src/password-strength"

describe("calculatePasswordStrength", () => {
    test("should return 'Very Weak' for passwords with insufficient length", () => {
        expect(calculatePasswordStrength("12345")).toBe("Very Weak")
        expect(calculatePasswordStrength("abcde")).toBe("Very Weak")
    });

    test("should return 'Weak' for passwords with some improvements but still insufficient", () => {
        expect(calculatePasswordStrength("abcdefg1")).toBe("Weak")
        expect(calculatePasswordStrength("ABCDEFG1")).toBe("Weak")
    });

    test("should return 'Moderate' for passwords meeting more criteria", () => {
        expect(calculatePasswordStrength("Abcdefg1")).toBe("Moderate")
        expect(calculatePasswordStrength("Abcdefa!")).toBe("Moderate")
    });

    test("should return 'Strong' for strong passwords meeting all criteria", () => {
        expect(calculatePasswordStrength("Abcdefg123!@#")).toBe("Strong")
        expect(calculatePasswordStrength("A1b2C3d4E5!@")).toBe("Strong")
    });

    test("should handle edge cases correctly", () => {
        expect(calculatePasswordStrength("")).toBe("Very Weak")
        expect(calculatePasswordStrength("12345678")).toBe("Very Weak")
        expect(calculatePasswordStrength("abcdefgh")).toBe("Very Weak")
        expect(calculatePasswordStrength("ABCDEFGH")).toBe("Very Weak")
        expect(calculatePasswordStrength("@@@@@@@@")).toBe("Very Weak")
    });
});
