import { ChallengesRepository } from "../../src/application/repositories/challenges-repository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengeRepository implements ChallengesRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    const student = this.items.find((student) => student.id === id);

    return student ?? null;
  }
}
