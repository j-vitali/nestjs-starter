import { JWTDto, UserEntity } from "@aladia/auth-middlewares";
import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
  createMongoAbility,
} from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { Action } from "@common/enum/casl.enum";
import { CourseRoles } from "@common/enum/course-roles.enum";
import { Roles } from "@common/enum/roles.enum";
import { UpdateUserDto } from "src/users/dto/update-user.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";

type Subjects =
  | InferSubjects<
      | typeof UserEntity
      | typeof UpdateUserDto
      | typeof CreateUserDto
    >
  | "all";

export type AppAbility = Ability<[Action, Subjects]>;

/**
 * We should have multiple factories for different entities/dtos:
 */
@Injectable()
export class CaslAbilityFactory {
  createForUser(user: JWTDto) {
    console.log("user-jwt", user);

    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(createMongoAbility);

    if (rootRole(user, Roles.Admin)) {
      can(Action.Manage, "all"); // read-write access to every entity
    }

    // can(Action.Read, GetOrganizationParams); // read-only access to every entity
    // can(Action.Create, CreateOrganizationDto, { userId: user.userId });
    // can(Action.Read, OrganizationEntity, { userId: user.userId });
    // can(Action.Update, OrganizationEntity, { userId: user.userId });

    // // But Cant't delete published OrganizationDTO
    // cannot(Action.Delete, OrganizationEntity, { isPublished: true });

    // We can add more rules based on the coursesIds where we are Teachers present in the JWT:
    const coursesWhenTeacher = entityRole(user, "course", CourseRoles.Teacher);
    // if (coursesWhenTeacher) {
    //   can(Action.Manage, OrganizationDto, {
    //     courseId: { $in: coursesWhenTeacher },
    //     // or for eg.
    //     // spaceId: { $in: spacesWhenManager },
    //   });
    // }

    return build({
      // Read https://casl.js.org/v6/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}

function rootRole(user: JWTDto, role: Roles) {
  return user.roles?.find(
    (r) => !r.entityType && !r.entityId && r.role == role,
  );
}

function entityRole(user: JWTDto, entityType: string, role: CourseRoles) {
  return user.roles
    ?.filter((r) => r.entityType == entityType && r.role == role)
    ?.map((r) => r.entityId);
}
