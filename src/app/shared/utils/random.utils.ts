export class RandomUtils {
  static boolean(): boolean {
    return !!Math.round(Math.random());
  }

  static color(): string {
    const hex = () => {
      const n = RandomUtils.hex();
      return n.length === 1 ? `0${n}` : n;
    };

    return `#${hex()}${hex()}${hex()}`.toUpperCase();
  }

  static hex(): string {
    return RandomUtils.int(255).toString(16);
  }

  static id(): string {
    return crypto.randomUUID();
  }

  static int(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
