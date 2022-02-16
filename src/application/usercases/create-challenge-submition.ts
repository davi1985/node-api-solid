import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/challenges-repository";
import { StudentsRepository } from "../repositories/students-repository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
};

export class CreateChallengeSubmission {
  constructor(
    private studentsRepository: StudentsRepository,
    private challengesRepository: ChallengesRepository
  ) {}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = await this.studentsRepository.findById(studentId);
    const challenge = await this.challengesRepository.findById(challengeId);

    if (!student) {
      throw new Error("Student does not exists.");
    }

    if (!challenge) {
      throw new Error("Challenge does not exists.");
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    });

    return submission;
  }
}
