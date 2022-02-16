import { InMemoryChallengeRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";

import { CreateChallengeSubmission } from "./create-challenge-submition";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challege submission", async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengeRepository();

    const student = Student.create({
      name: "Davi",
      email: "jonhdoe@example.com",
    });

    const challenge = Challenge.create({
      title: "Challenge 01",
      instructionsUrl: "http://example.com",
    });

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
