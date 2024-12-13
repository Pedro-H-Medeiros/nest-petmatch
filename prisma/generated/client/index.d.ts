
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Ong
 * 
 */
export type Ong = $Result.DefaultSelection<Prisma.$OngPayload>
/**
 * Model Adoption
 * 
 */
export type Adoption = $Result.DefaultSelection<Prisma.$AdoptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
  ONG_ADMIN: 'ONG_ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AdoptionStatus: {
  AVAILABLE: 'AVAILABLE',
  PENDING: 'PENDING',
  ADOPTED: 'ADOPTED'
};

export type AdoptionStatus = (typeof AdoptionStatus)[keyof typeof AdoptionStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AdoptionStatus = $Enums.AdoptionStatus

export const AdoptionStatus: typeof $Enums.AdoptionStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs>;

  /**
   * `prisma.ong`: Exposes CRUD operations for the **Ong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ongs
    * const ongs = await prisma.ong.findMany()
    * ```
    */
  get ong(): Prisma.OngDelegate<ExtArgs>;

  /**
   * `prisma.adoption`: Exposes CRUD operations for the **Adoption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adoptions
    * const adoptions = await prisma.adoption.findMany()
    * ```
    */
  get adoption(): Prisma.AdoptionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pet: 'Pet',
    Ong: 'Ong',
    Adoption: 'Adoption'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "pet" | "ong" | "adoption"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Ong: {
        payload: Prisma.$OngPayload<ExtArgs>
        fields: Prisma.OngFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OngFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OngFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          findFirst: {
            args: Prisma.OngFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OngFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          findMany: {
            args: Prisma.OngFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          create: {
            args: Prisma.OngCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          createMany: {
            args: Prisma.OngCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OngCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>[]
          }
          delete: {
            args: Prisma.OngDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          update: {
            args: Prisma.OngUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          deleteMany: {
            args: Prisma.OngDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OngUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OngUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngPayload>
          }
          aggregate: {
            args: Prisma.OngAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOng>
          }
          groupBy: {
            args: Prisma.OngGroupByArgs<ExtArgs>
            result: $Utils.Optional<OngGroupByOutputType>[]
          }
          count: {
            args: Prisma.OngCountArgs<ExtArgs>
            result: $Utils.Optional<OngCountAggregateOutputType> | number
          }
        }
      }
      Adoption: {
        payload: Prisma.$AdoptionPayload<ExtArgs>
        fields: Prisma.AdoptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdoptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdoptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          findFirst: {
            args: Prisma.AdoptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdoptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          findMany: {
            args: Prisma.AdoptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>[]
          }
          create: {
            args: Prisma.AdoptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          createMany: {
            args: Prisma.AdoptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdoptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>[]
          }
          delete: {
            args: Prisma.AdoptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          update: {
            args: Prisma.AdoptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          deleteMany: {
            args: Prisma.AdoptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdoptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdoptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdoptionPayload>
          }
          aggregate: {
            args: Prisma.AdoptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdoption>
          }
          groupBy: {
            args: Prisma.AdoptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdoptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdoptionCountArgs<ExtArgs>
            result: $Utils.Optional<AdoptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    adoption: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | UserCountOutputTypeCountAdoptionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdoptionWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    adoption: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | PetCountOutputTypeCountAdoptionArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdoptionWhereInput
  }


  /**
   * Count Type OngCountOutputType
   */

  export type OngCountOutputType = {
    users: number
    pets: number
  }

  export type OngCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OngCountOutputTypeCountUsersArgs
    pets?: boolean | OngCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * OngCountOutputType without action
   */
  export type OngCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngCountOutputType
     */
    select?: OngCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OngCountOutputType without action
   */
  export type OngCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OngCountOutputType without action
   */
  export type OngCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    cpf: string | null
    phone: string | null
    name: string | null
    password: string | null
    image_url: string | null
    role: $Enums.UserRole | null
    ong_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    cpf: string | null
    phone: string | null
    name: string | null
    password: string | null
    image_url: string | null
    role: $Enums.UserRole | null
    ong_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    cpf: number
    phone: number
    name: number
    password: number
    image_url: number
    role: number
    ong_id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    cpf?: true
    phone?: true
    name?: true
    password?: true
    image_url?: true
    role?: true
    ong_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    cpf?: true
    phone?: true
    name?: true
    password?: true
    image_url?: true
    role?: true
    ong_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    cpf?: true
    phone?: true
    name?: true
    password?: true
    image_url?: true
    role?: true
    ong_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
    ong_id: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    cpf?: boolean
    phone?: boolean
    name?: boolean
    password?: boolean
    image_url?: boolean
    role?: boolean
    ong_id?: boolean
    ong?: boolean | User$ongArgs<ExtArgs>
    adoption?: boolean | User$adoptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    cpf?: boolean
    phone?: boolean
    name?: boolean
    password?: boolean
    image_url?: boolean
    role?: boolean
    ong_id?: boolean
    ong?: boolean | User$ongArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    cpf?: boolean
    phone?: boolean
    name?: boolean
    password?: boolean
    image_url?: boolean
    role?: boolean
    ong_id?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ong?: boolean | User$ongArgs<ExtArgs>
    adoption?: boolean | User$adoptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ong?: boolean | User$ongArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ong: Prisma.$OngPayload<ExtArgs> | null
      adoption: Prisma.$AdoptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      cpf: string
      phone: string
      name: string
      password: string
      image_url: string
      role: $Enums.UserRole
      ong_id: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ong<T extends User$ongArgs<ExtArgs> = {}>(args?: Subset<T, User$ongArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    adoption<T extends User$adoptionArgs<ExtArgs> = {}>(args?: Subset<T, User$adoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image_url: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly ong_id: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.ong
   */
  export type User$ongArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    where?: OngWhereInput
  }

  /**
   * User.adoption
   */
  export type User$adoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    where?: AdoptionWhereInput
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    cursor?: AdoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    ong_id: string | null
    name: string | null
    age: Date | null
    sex: string | null
    race: string | null
    color: string | null
    adoption_status: $Enums.AdoptionStatus | null
    created_at: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    ong_id: string | null
    name: string | null
    age: Date | null
    sex: string | null
    race: string | null
    color: string | null
    adoption_status: $Enums.AdoptionStatus | null
    created_at: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    ong_id: number
    name: number
    age: number
    sex: number
    race: number
    color: number
    adoption_status: number
    image_urls: number
    created_at: number
    _all: number
  }


  export type PetMinAggregateInputType = {
    id?: true
    ong_id?: true
    name?: true
    age?: true
    sex?: true
    race?: true
    color?: true
    adoption_status?: true
    created_at?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    ong_id?: true
    name?: true
    age?: true
    sex?: true
    race?: true
    color?: true
    adoption_status?: true
    created_at?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    ong_id?: true
    name?: true
    age?: true
    sex?: true
    race?: true
    color?: true
    adoption_status?: true
    image_urls?: true
    created_at?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    ong_id: string
    name: string
    age: Date
    sex: string
    race: string
    color: string
    adoption_status: $Enums.AdoptionStatus
    image_urls: string[]
    created_at: Date
    _count: PetCountAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ong_id?: boolean
    name?: boolean
    age?: boolean
    sex?: boolean
    race?: boolean
    color?: boolean
    adoption_status?: boolean
    image_urls?: boolean
    created_at?: boolean
    adoption?: boolean | Pet$adoptionArgs<ExtArgs>
    ong?: boolean | OngDefaultArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ong_id?: boolean
    name?: boolean
    age?: boolean
    sex?: boolean
    race?: boolean
    color?: boolean
    adoption_status?: boolean
    image_urls?: boolean
    created_at?: boolean
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    ong_id?: boolean
    name?: boolean
    age?: boolean
    sex?: boolean
    race?: boolean
    color?: boolean
    adoption_status?: boolean
    image_urls?: boolean
    created_at?: boolean
  }

  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | Pet$adoptionArgs<ExtArgs>
    ong?: boolean | OngDefaultArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ong?: boolean | OngDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      adoption: Prisma.$AdoptionPayload<ExtArgs>[]
      ong: Prisma.$OngPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ong_id: string
      name: string
      age: Date
      sex: string
      race: string
      color: string
      adoption_status: $Enums.AdoptionStatus
      image_urls: string[]
      created_at: Date
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoption<T extends Pet$adoptionArgs<ExtArgs> = {}>(args?: Subset<T, Pet$adoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findMany"> | Null>
    ong<T extends OngDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OngDefaultArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pet model
   */ 
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly ong_id: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly age: FieldRef<"Pet", 'DateTime'>
    readonly sex: FieldRef<"Pet", 'String'>
    readonly race: FieldRef<"Pet", 'String'>
    readonly color: FieldRef<"Pet", 'String'>
    readonly adoption_status: FieldRef<"Pet", 'AdoptionStatus'>
    readonly image_urls: FieldRef<"Pet", 'String[]'>
    readonly created_at: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
  }

  /**
   * Pet.adoption
   */
  export type Pet$adoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    where?: AdoptionWhereInput
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    cursor?: AdoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Ong
   */

  export type AggregateOng = {
    _count: OngCountAggregateOutputType | null
    _min: OngMinAggregateOutputType | null
    _max: OngMaxAggregateOutputType | null
  }

  export type OngMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image_user: string | null
    created_at: Date | null
  }

  export type OngMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image_user: string | null
    created_at: Date | null
  }

  export type OngCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image_user: number
    image_urls: number
    created_at: number
    _all: number
  }


  export type OngMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image_user?: true
    created_at?: true
  }

  export type OngMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image_user?: true
    created_at?: true
  }

  export type OngCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image_user?: true
    image_urls?: true
    created_at?: true
    _all?: true
  }

  export type OngAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ong to aggregate.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ongs
    **/
    _count?: true | OngCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OngMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OngMaxAggregateInputType
  }

  export type GetOngAggregateType<T extends OngAggregateArgs> = {
        [P in keyof T & keyof AggregateOng]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOng[P]>
      : GetScalarType<T[P], AggregateOng[P]>
  }




  export type OngGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OngWhereInput
    orderBy?: OngOrderByWithAggregationInput | OngOrderByWithAggregationInput[]
    by: OngScalarFieldEnum[] | OngScalarFieldEnum
    having?: OngScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OngCountAggregateInputType | true
    _min?: OngMinAggregateInputType
    _max?: OngMaxAggregateInputType
  }

  export type OngGroupByOutputType = {
    id: string
    name: string
    description: string
    image_user: string
    image_urls: string[]
    created_at: Date
    _count: OngCountAggregateOutputType | null
    _min: OngMinAggregateOutputType | null
    _max: OngMaxAggregateOutputType | null
  }

  type GetOngGroupByPayload<T extends OngGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OngGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OngGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OngGroupByOutputType[P]>
            : GetScalarType<T[P], OngGroupByOutputType[P]>
        }
      >
    >


  export type OngSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image_user?: boolean
    image_urls?: boolean
    created_at?: boolean
    users?: boolean | Ong$usersArgs<ExtArgs>
    pets?: boolean | Ong$petsArgs<ExtArgs>
    _count?: boolean | OngCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ong"]>

  export type OngSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image_user?: boolean
    image_urls?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["ong"]>

  export type OngSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image_user?: boolean
    image_urls?: boolean
    created_at?: boolean
  }

  export type OngInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Ong$usersArgs<ExtArgs>
    pets?: boolean | Ong$petsArgs<ExtArgs>
    _count?: boolean | OngCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OngIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OngPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ong"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image_user: string
      image_urls: string[]
      created_at: Date
    }, ExtArgs["result"]["ong"]>
    composites: {}
  }

  type OngGetPayload<S extends boolean | null | undefined | OngDefaultArgs> = $Result.GetResult<Prisma.$OngPayload, S>

  type OngCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OngFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OngCountAggregateInputType | true
    }

  export interface OngDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ong'], meta: { name: 'Ong' } }
    /**
     * Find zero or one Ong that matches the filter.
     * @param {OngFindUniqueArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OngFindUniqueArgs>(args: SelectSubset<T, OngFindUniqueArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ong that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OngFindUniqueOrThrowArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OngFindUniqueOrThrowArgs>(args: SelectSubset<T, OngFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindFirstArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OngFindFirstArgs>(args?: SelectSubset<T, OngFindFirstArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindFirstOrThrowArgs} args - Arguments to find a Ong
     * @example
     * // Get one Ong
     * const ong = await prisma.ong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OngFindFirstOrThrowArgs>(args?: SelectSubset<T, OngFindFirstOrThrowArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ongs
     * const ongs = await prisma.ong.findMany()
     * 
     * // Get first 10 Ongs
     * const ongs = await prisma.ong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ongWithIdOnly = await prisma.ong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OngFindManyArgs>(args?: SelectSubset<T, OngFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ong.
     * @param {OngCreateArgs} args - Arguments to create a Ong.
     * @example
     * // Create one Ong
     * const Ong = await prisma.ong.create({
     *   data: {
     *     // ... data to create a Ong
     *   }
     * })
     * 
     */
    create<T extends OngCreateArgs>(args: SelectSubset<T, OngCreateArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ongs.
     * @param {OngCreateManyArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ong = await prisma.ong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OngCreateManyArgs>(args?: SelectSubset<T, OngCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ongs and returns the data saved in the database.
     * @param {OngCreateManyAndReturnArgs} args - Arguments to create many Ongs.
     * @example
     * // Create many Ongs
     * const ong = await prisma.ong.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ongs and only return the `id`
     * const ongWithIdOnly = await prisma.ong.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OngCreateManyAndReturnArgs>(args?: SelectSubset<T, OngCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ong.
     * @param {OngDeleteArgs} args - Arguments to delete one Ong.
     * @example
     * // Delete one Ong
     * const Ong = await prisma.ong.delete({
     *   where: {
     *     // ... filter to delete one Ong
     *   }
     * })
     * 
     */
    delete<T extends OngDeleteArgs>(args: SelectSubset<T, OngDeleteArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ong.
     * @param {OngUpdateArgs} args - Arguments to update one Ong.
     * @example
     * // Update one Ong
     * const ong = await prisma.ong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OngUpdateArgs>(args: SelectSubset<T, OngUpdateArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ongs.
     * @param {OngDeleteManyArgs} args - Arguments to filter Ongs to delete.
     * @example
     * // Delete a few Ongs
     * const { count } = await prisma.ong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OngDeleteManyArgs>(args?: SelectSubset<T, OngDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ongs
     * const ong = await prisma.ong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OngUpdateManyArgs>(args: SelectSubset<T, OngUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ong.
     * @param {OngUpsertArgs} args - Arguments to update or create a Ong.
     * @example
     * // Update or create a Ong
     * const ong = await prisma.ong.upsert({
     *   create: {
     *     // ... data to create a Ong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ong we want to update
     *   }
     * })
     */
    upsert<T extends OngUpsertArgs>(args: SelectSubset<T, OngUpsertArgs<ExtArgs>>): Prisma__OngClient<$Result.GetResult<Prisma.$OngPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngCountArgs} args - Arguments to filter Ongs to count.
     * @example
     * // Count the number of Ongs
     * const count = await prisma.ong.count({
     *   where: {
     *     // ... the filter for the Ongs we want to count
     *   }
     * })
    **/
    count<T extends OngCountArgs>(
      args?: Subset<T, OngCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OngCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OngAggregateArgs>(args: Subset<T, OngAggregateArgs>): Prisma.PrismaPromise<GetOngAggregateType<T>>

    /**
     * Group by Ong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OngGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OngGroupByArgs['orderBy'] }
        : { orderBy?: OngGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OngGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ong model
   */
  readonly fields: OngFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OngClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Ong$usersArgs<ExtArgs> = {}>(args?: Subset<T, Ong$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    pets<T extends Ong$petsArgs<ExtArgs> = {}>(args?: Subset<T, Ong$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ong model
   */ 
  interface OngFieldRefs {
    readonly id: FieldRef<"Ong", 'String'>
    readonly name: FieldRef<"Ong", 'String'>
    readonly description: FieldRef<"Ong", 'String'>
    readonly image_user: FieldRef<"Ong", 'String'>
    readonly image_urls: FieldRef<"Ong", 'String[]'>
    readonly created_at: FieldRef<"Ong", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ong findUnique
   */
  export type OngFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong findUniqueOrThrow
   */
  export type OngFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong findFirst
   */
  export type OngFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ongs.
     */
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong findFirstOrThrow
   */
  export type OngFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ong to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ongs.
     */
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong findMany
   */
  export type OngFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter, which Ongs to fetch.
     */
    where?: OngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ongs to fetch.
     */
    orderBy?: OngOrderByWithRelationInput | OngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ongs.
     */
    cursor?: OngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ongs.
     */
    skip?: number
    distinct?: OngScalarFieldEnum | OngScalarFieldEnum[]
  }

  /**
   * Ong create
   */
  export type OngCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The data needed to create a Ong.
     */
    data: XOR<OngCreateInput, OngUncheckedCreateInput>
  }

  /**
   * Ong createMany
   */
  export type OngCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ongs.
     */
    data: OngCreateManyInput | OngCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ong createManyAndReturn
   */
  export type OngCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ongs.
     */
    data: OngCreateManyInput | OngCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ong update
   */
  export type OngUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The data needed to update a Ong.
     */
    data: XOR<OngUpdateInput, OngUncheckedUpdateInput>
    /**
     * Choose, which Ong to update.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong updateMany
   */
  export type OngUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ongs.
     */
    data: XOR<OngUpdateManyMutationInput, OngUncheckedUpdateManyInput>
    /**
     * Filter which Ongs to update
     */
    where?: OngWhereInput
  }

  /**
   * Ong upsert
   */
  export type OngUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * The filter to search for the Ong to update in case it exists.
     */
    where: OngWhereUniqueInput
    /**
     * In case the Ong found by the `where` argument doesn't exist, create a new Ong with this data.
     */
    create: XOR<OngCreateInput, OngUncheckedCreateInput>
    /**
     * In case the Ong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OngUpdateInput, OngUncheckedUpdateInput>
  }

  /**
   * Ong delete
   */
  export type OngDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
    /**
     * Filter which Ong to delete.
     */
    where: OngWhereUniqueInput
  }

  /**
   * Ong deleteMany
   */
  export type OngDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ongs to delete
     */
    where?: OngWhereInput
  }

  /**
   * Ong.users
   */
  export type Ong$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Ong.pets
   */
  export type Ong$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Ong without action
   */
  export type OngDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ong
     */
    select?: OngSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OngInclude<ExtArgs> | null
  }


  /**
   * Model Adoption
   */

  export type AggregateAdoption = {
    _count: AdoptionCountAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  export type AdoptionMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    pet_id: string | null
    adopted_at: Date | null
  }

  export type AdoptionMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    pet_id: string | null
    adopted_at: Date | null
  }

  export type AdoptionCountAggregateOutputType = {
    id: number
    user_id: number
    pet_id: number
    adopted_at: number
    _all: number
  }


  export type AdoptionMinAggregateInputType = {
    id?: true
    user_id?: true
    pet_id?: true
    adopted_at?: true
  }

  export type AdoptionMaxAggregateInputType = {
    id?: true
    user_id?: true
    pet_id?: true
    adopted_at?: true
  }

  export type AdoptionCountAggregateInputType = {
    id?: true
    user_id?: true
    pet_id?: true
    adopted_at?: true
    _all?: true
  }

  export type AdoptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adoption to aggregate.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adoptions
    **/
    _count?: true | AdoptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdoptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdoptionMaxAggregateInputType
  }

  export type GetAdoptionAggregateType<T extends AdoptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdoption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdoption[P]>
      : GetScalarType<T[P], AggregateAdoption[P]>
  }




  export type AdoptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdoptionWhereInput
    orderBy?: AdoptionOrderByWithAggregationInput | AdoptionOrderByWithAggregationInput[]
    by: AdoptionScalarFieldEnum[] | AdoptionScalarFieldEnum
    having?: AdoptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdoptionCountAggregateInputType | true
    _min?: AdoptionMinAggregateInputType
    _max?: AdoptionMaxAggregateInputType
  }

  export type AdoptionGroupByOutputType = {
    id: string
    user_id: string
    pet_id: string
    adopted_at: Date
    _count: AdoptionCountAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  type GetAdoptionGroupByPayload<T extends AdoptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdoptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdoptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
            : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
        }
      >
    >


  export type AdoptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pet_id?: boolean
    adopted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type AdoptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pet_id?: boolean
    adopted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type AdoptionSelectScalar = {
    id?: boolean
    user_id?: boolean
    pet_id?: boolean
    adopted_at?: boolean
  }

  export type AdoptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type AdoptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $AdoptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adoption"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      pet_id: string
      adopted_at: Date
    }, ExtArgs["result"]["adoption"]>
    composites: {}
  }

  type AdoptionGetPayload<S extends boolean | null | undefined | AdoptionDefaultArgs> = $Result.GetResult<Prisma.$AdoptionPayload, S>

  type AdoptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdoptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdoptionCountAggregateInputType | true
    }

  export interface AdoptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adoption'], meta: { name: 'Adoption' } }
    /**
     * Find zero or one Adoption that matches the filter.
     * @param {AdoptionFindUniqueArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdoptionFindUniqueArgs>(args: SelectSubset<T, AdoptionFindUniqueArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Adoption that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdoptionFindUniqueOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdoptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdoptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Adoption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindFirstArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdoptionFindFirstArgs>(args?: SelectSubset<T, AdoptionFindFirstArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Adoption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindFirstOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdoptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdoptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Adoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adoptions
     * const adoptions = await prisma.adoption.findMany()
     * 
     * // Get first 10 Adoptions
     * const adoptions = await prisma.adoption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adoptionWithIdOnly = await prisma.adoption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdoptionFindManyArgs>(args?: SelectSubset<T, AdoptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Adoption.
     * @param {AdoptionCreateArgs} args - Arguments to create a Adoption.
     * @example
     * // Create one Adoption
     * const Adoption = await prisma.adoption.create({
     *   data: {
     *     // ... data to create a Adoption
     *   }
     * })
     * 
     */
    create<T extends AdoptionCreateArgs>(args: SelectSubset<T, AdoptionCreateArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Adoptions.
     * @param {AdoptionCreateManyArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdoptionCreateManyArgs>(args?: SelectSubset<T, AdoptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adoptions and returns the data saved in the database.
     * @param {AdoptionCreateManyAndReturnArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adoptions and only return the `id`
     * const adoptionWithIdOnly = await prisma.adoption.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdoptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AdoptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Adoption.
     * @param {AdoptionDeleteArgs} args - Arguments to delete one Adoption.
     * @example
     * // Delete one Adoption
     * const Adoption = await prisma.adoption.delete({
     *   where: {
     *     // ... filter to delete one Adoption
     *   }
     * })
     * 
     */
    delete<T extends AdoptionDeleteArgs>(args: SelectSubset<T, AdoptionDeleteArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Adoption.
     * @param {AdoptionUpdateArgs} args - Arguments to update one Adoption.
     * @example
     * // Update one Adoption
     * const adoption = await prisma.adoption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdoptionUpdateArgs>(args: SelectSubset<T, AdoptionUpdateArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Adoptions.
     * @param {AdoptionDeleteManyArgs} args - Arguments to filter Adoptions to delete.
     * @example
     * // Delete a few Adoptions
     * const { count } = await prisma.adoption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdoptionDeleteManyArgs>(args?: SelectSubset<T, AdoptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdoptionUpdateManyArgs>(args: SelectSubset<T, AdoptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Adoption.
     * @param {AdoptionUpsertArgs} args - Arguments to update or create a Adoption.
     * @example
     * // Update or create a Adoption
     * const adoption = await prisma.adoption.upsert({
     *   create: {
     *     // ... data to create a Adoption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adoption we want to update
     *   }
     * })
     */
    upsert<T extends AdoptionUpsertArgs>(args: SelectSubset<T, AdoptionUpsertArgs<ExtArgs>>): Prisma__AdoptionClient<$Result.GetResult<Prisma.$AdoptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionCountArgs} args - Arguments to filter Adoptions to count.
     * @example
     * // Count the number of Adoptions
     * const count = await prisma.adoption.count({
     *   where: {
     *     // ... the filter for the Adoptions we want to count
     *   }
     * })
    **/
    count<T extends AdoptionCountArgs>(
      args?: Subset<T, AdoptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdoptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdoptionAggregateArgs>(args: Subset<T, AdoptionAggregateArgs>): Prisma.PrismaPromise<GetAdoptionAggregateType<T>>

    /**
     * Group by Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdoptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdoptionGroupByArgs['orderBy'] }
        : { orderBy?: AdoptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdoptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdoptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adoption model
   */
  readonly fields: AdoptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adoption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdoptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Adoption model
   */ 
  interface AdoptionFieldRefs {
    readonly id: FieldRef<"Adoption", 'String'>
    readonly user_id: FieldRef<"Adoption", 'String'>
    readonly pet_id: FieldRef<"Adoption", 'String'>
    readonly adopted_at: FieldRef<"Adoption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Adoption findUnique
   */
  export type AdoptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption findUniqueOrThrow
   */
  export type AdoptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption findFirst
   */
  export type AdoptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption findFirstOrThrow
   */
  export type AdoptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoption to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption findMany
   */
  export type AdoptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter, which Adoptions to fetch.
     */
    where?: AdoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adoptions to fetch.
     */
    orderBy?: AdoptionOrderByWithRelationInput | AdoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adoptions.
     */
    cursor?: AdoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adoptions.
     */
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * Adoption create
   */
  export type AdoptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Adoption.
     */
    data: XOR<AdoptionCreateInput, AdoptionUncheckedCreateInput>
  }

  /**
   * Adoption createMany
   */
  export type AdoptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adoptions.
     */
    data: AdoptionCreateManyInput | AdoptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adoption createManyAndReturn
   */
  export type AdoptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Adoptions.
     */
    data: AdoptionCreateManyInput | AdoptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adoption update
   */
  export type AdoptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Adoption.
     */
    data: XOR<AdoptionUpdateInput, AdoptionUncheckedUpdateInput>
    /**
     * Choose, which Adoption to update.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption updateMany
   */
  export type AdoptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adoptions.
     */
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyInput>
    /**
     * Filter which Adoptions to update
     */
    where?: AdoptionWhereInput
  }

  /**
   * Adoption upsert
   */
  export type AdoptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Adoption to update in case it exists.
     */
    where: AdoptionWhereUniqueInput
    /**
     * In case the Adoption found by the `where` argument doesn't exist, create a new Adoption with this data.
     */
    create: XOR<AdoptionCreateInput, AdoptionUncheckedCreateInput>
    /**
     * In case the Adoption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdoptionUpdateInput, AdoptionUncheckedUpdateInput>
  }

  /**
   * Adoption delete
   */
  export type AdoptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
    /**
     * Filter which Adoption to delete.
     */
    where: AdoptionWhereUniqueInput
  }

  /**
   * Adoption deleteMany
   */
  export type AdoptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adoptions to delete
     */
    where?: AdoptionWhereInput
  }

  /**
   * Adoption without action
   */
  export type AdoptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adoption
     */
    select?: AdoptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdoptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    cpf: 'cpf',
    phone: 'phone',
    name: 'name',
    password: 'password',
    image_url: 'image_url',
    role: 'role',
    ong_id: 'ong_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    ong_id: 'ong_id',
    name: 'name',
    age: 'age',
    sex: 'sex',
    race: 'race',
    color: 'color',
    adoption_status: 'adoption_status',
    image_urls: 'image_urls',
    created_at: 'created_at'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const OngScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image_user: 'image_user',
    image_urls: 'image_urls',
    created_at: 'created_at'
  };

  export type OngScalarFieldEnum = (typeof OngScalarFieldEnum)[keyof typeof OngScalarFieldEnum]


  export const AdoptionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    pet_id: 'pet_id',
    adopted_at: 'adopted_at'
  };

  export type AdoptionScalarFieldEnum = (typeof AdoptionScalarFieldEnum)[keyof typeof AdoptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AdoptionStatus'
   */
  export type EnumAdoptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdoptionStatus'>
    


  /**
   * Reference to a field of type 'AdoptionStatus[]'
   */
  export type ListEnumAdoptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdoptionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image_url?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    ong_id?: StringNullableFilter<"User"> | string | null
    ong?: XOR<OngNullableRelationFilter, OngWhereInput> | null
    adoption?: AdoptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image_url?: SortOrder
    role?: SortOrder
    ong_id?: SortOrderInput | SortOrder
    ong?: OngOrderByWithRelationInput
    adoption?: AdoptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cpf?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image_url?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    ong_id?: StringNullableFilter<"User"> | string | null
    ong?: XOR<OngNullableRelationFilter, OngWhereInput> | null
    adoption?: AdoptionListRelationFilter
  }, "id" | "email" | "cpf" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image_url?: SortOrder
    role?: SortOrder
    ong_id?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image_url?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    ong_id?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    ong_id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    age?: DateTimeFilter<"Pet"> | Date | string
    sex?: StringFilter<"Pet"> | string
    race?: StringFilter<"Pet"> | string
    color?: StringFilter<"Pet"> | string
    adoption_status?: EnumAdoptionStatusFilter<"Pet"> | $Enums.AdoptionStatus
    image_urls?: StringNullableListFilter<"Pet">
    created_at?: DateTimeFilter<"Pet"> | Date | string
    adoption?: AdoptionListRelationFilter
    ong?: XOR<OngRelationFilter, OngWhereInput>
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    ong_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    race?: SortOrder
    color?: SortOrder
    adoption_status?: SortOrder
    image_urls?: SortOrder
    created_at?: SortOrder
    adoption?: AdoptionOrderByRelationAggregateInput
    ong?: OngOrderByWithRelationInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    ong_id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    age?: DateTimeFilter<"Pet"> | Date | string
    sex?: StringFilter<"Pet"> | string
    race?: StringFilter<"Pet"> | string
    color?: StringFilter<"Pet"> | string
    adoption_status?: EnumAdoptionStatusFilter<"Pet"> | $Enums.AdoptionStatus
    image_urls?: StringNullableListFilter<"Pet">
    created_at?: DateTimeFilter<"Pet"> | Date | string
    adoption?: AdoptionListRelationFilter
    ong?: XOR<OngRelationFilter, OngWhereInput>
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    ong_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    race?: SortOrder
    color?: SortOrder
    adoption_status?: SortOrder
    image_urls?: SortOrder
    created_at?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    ong_id?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    age?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    sex?: StringWithAggregatesFilter<"Pet"> | string
    race?: StringWithAggregatesFilter<"Pet"> | string
    color?: StringWithAggregatesFilter<"Pet"> | string
    adoption_status?: EnumAdoptionStatusWithAggregatesFilter<"Pet"> | $Enums.AdoptionStatus
    image_urls?: StringNullableListFilter<"Pet">
    created_at?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
  }

  export type OngWhereInput = {
    AND?: OngWhereInput | OngWhereInput[]
    OR?: OngWhereInput[]
    NOT?: OngWhereInput | OngWhereInput[]
    id?: StringFilter<"Ong"> | string
    name?: StringFilter<"Ong"> | string
    description?: StringFilter<"Ong"> | string
    image_user?: StringFilter<"Ong"> | string
    image_urls?: StringNullableListFilter<"Ong">
    created_at?: DateTimeFilter<"Ong"> | Date | string
    users?: UserListRelationFilter
    pets?: PetListRelationFilter
  }

  export type OngOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image_user?: SortOrder
    image_urls?: SortOrder
    created_at?: SortOrder
    users?: UserOrderByRelationAggregateInput
    pets?: PetOrderByRelationAggregateInput
  }

  export type OngWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OngWhereInput | OngWhereInput[]
    OR?: OngWhereInput[]
    NOT?: OngWhereInput | OngWhereInput[]
    description?: StringFilter<"Ong"> | string
    image_user?: StringFilter<"Ong"> | string
    image_urls?: StringNullableListFilter<"Ong">
    created_at?: DateTimeFilter<"Ong"> | Date | string
    users?: UserListRelationFilter
    pets?: PetListRelationFilter
  }, "id" | "name">

  export type OngOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image_user?: SortOrder
    image_urls?: SortOrder
    created_at?: SortOrder
    _count?: OngCountOrderByAggregateInput
    _max?: OngMaxOrderByAggregateInput
    _min?: OngMinOrderByAggregateInput
  }

  export type OngScalarWhereWithAggregatesInput = {
    AND?: OngScalarWhereWithAggregatesInput | OngScalarWhereWithAggregatesInput[]
    OR?: OngScalarWhereWithAggregatesInput[]
    NOT?: OngScalarWhereWithAggregatesInput | OngScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ong"> | string
    name?: StringWithAggregatesFilter<"Ong"> | string
    description?: StringWithAggregatesFilter<"Ong"> | string
    image_user?: StringWithAggregatesFilter<"Ong"> | string
    image_urls?: StringNullableListFilter<"Ong">
    created_at?: DateTimeWithAggregatesFilter<"Ong"> | Date | string
  }

  export type AdoptionWhereInput = {
    AND?: AdoptionWhereInput | AdoptionWhereInput[]
    OR?: AdoptionWhereInput[]
    NOT?: AdoptionWhereInput | AdoptionWhereInput[]
    id?: StringFilter<"Adoption"> | string
    user_id?: StringFilter<"Adoption"> | string
    pet_id?: StringFilter<"Adoption"> | string
    adopted_at?: DateTimeFilter<"Adoption"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    pet?: XOR<PetRelationFilter, PetWhereInput>
  }

  export type AdoptionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    pet_id?: SortOrder
    adopted_at?: SortOrder
    user?: UserOrderByWithRelationInput
    pet?: PetOrderByWithRelationInput
  }

  export type AdoptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdoptionWhereInput | AdoptionWhereInput[]
    OR?: AdoptionWhereInput[]
    NOT?: AdoptionWhereInput | AdoptionWhereInput[]
    user_id?: StringFilter<"Adoption"> | string
    pet_id?: StringFilter<"Adoption"> | string
    adopted_at?: DateTimeFilter<"Adoption"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    pet?: XOR<PetRelationFilter, PetWhereInput>
  }, "id">

  export type AdoptionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    pet_id?: SortOrder
    adopted_at?: SortOrder
    _count?: AdoptionCountOrderByAggregateInput
    _max?: AdoptionMaxOrderByAggregateInput
    _min?: AdoptionMinOrderByAggregateInput
  }

  export type AdoptionScalarWhereWithAggregatesInput = {
    AND?: AdoptionScalarWhereWithAggregatesInput | AdoptionScalarWhereWithAggregatesInput[]
    OR?: AdoptionScalarWhereWithAggregatesInput[]
    NOT?: AdoptionScalarWhereWithAggregatesInput | AdoptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Adoption"> | string
    user_id?: StringWithAggregatesFilter<"Adoption"> | string
    pet_id?: StringWithAggregatesFilter<"Adoption"> | string
    adopted_at?: DateTimeWithAggregatesFilter<"Adoption"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
    ong?: OngCreateNestedOneWithoutUsersInput
    adoption?: AdoptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
    ong_id?: string | null
    adoption?: AdoptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ong?: OngUpdateOneWithoutUsersNestedInput
    adoption?: AdoptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ong_id?: NullableStringFieldUpdateOperationsInput | string | null
    adoption?: AdoptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
    ong_id?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ong_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetCreateInput = {
    id?: string
    name: string
    age: Date | string
    sex: string
    race: string
    color: string
    adoption_status?: $Enums.AdoptionStatus
    image_urls?: PetCreateimage_urlsInput | string[]
    created_at?: Date | string
    adoption?: AdoptionCreateNestedManyWithoutPetInput
    ong: OngCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    ong_id: string
    name: string
    age: Date | string
    sex: string
    race: string
    color: string
    adoption_status?: $Enums.AdoptionStatus
    image_urls?: PetCreateimage_urlsInput | string[]
    created_at?: Date | string
    adoption?: AdoptionUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption?: AdoptionUpdateManyWithoutPetNestedInput
    ong?: OngUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ong_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption?: AdoptionUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: string
    ong_id: string
    name: string
    age: Date | string
    sex: string
    race: string
    color: string
    adoption_status?: $Enums.AdoptionStatus
    image_urls?: PetCreateimage_urlsInput | string[]
    created_at?: Date | string
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ong_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngCreateInput = {
    id?: string
    name: string
    description: string
    image_user: string
    image_urls?: OngCreateimage_urlsInput | string[]
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutOngInput
    pets?: PetCreateNestedManyWithoutOngInput
  }

  export type OngUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image_user: string
    image_urls?: OngCreateimage_urlsInput | string[]
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOngInput
    pets?: PetUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    image_urls?: OngUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOngNestedInput
    pets?: PetUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    image_urls?: OngUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOngNestedInput
    pets?: PetUncheckedUpdateManyWithoutOngNestedInput
  }

  export type OngCreateManyInput = {
    id?: string
    name: string
    description: string
    image_user: string
    image_urls?: OngCreateimage_urlsInput | string[]
    created_at?: Date | string
  }

  export type OngUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    image_urls?: OngUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    image_urls?: OngUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdoptionCreateInput = {
    id?: string
    adopted_at: Date | string
    user: UserCreateNestedOneWithoutAdoptionInput
    pet: PetCreateNestedOneWithoutAdoptionInput
  }

  export type AdoptionUncheckedCreateInput = {
    id?: string
    user_id: string
    pet_id: string
    adopted_at: Date | string
  }

  export type AdoptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdoptionNestedInput
    pet?: PetUpdateOneRequiredWithoutAdoptionNestedInput
  }

  export type AdoptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    pet_id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdoptionCreateManyInput = {
    id?: string
    user_id: string
    pet_id: string
    adopted_at: Date | string
  }

  export type AdoptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdoptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    pet_id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OngNullableRelationFilter = {
    is?: OngWhereInput | null
    isNot?: OngWhereInput | null
  }

  export type AdoptionListRelationFilter = {
    every?: AdoptionWhereInput
    some?: AdoptionWhereInput
    none?: AdoptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdoptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image_url?: SortOrder
    role?: SortOrder
    ong_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image_url?: SortOrder
    role?: SortOrder
    ong_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    image_url?: SortOrder
    role?: SortOrder
    ong_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumAdoptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdoptionStatus | EnumAdoptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdoptionStatus[] | ListEnumAdoptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdoptionStatus[] | ListEnumAdoptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdoptionStatusFilter<$PrismaModel> | $Enums.AdoptionStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OngRelationFilter = {
    is?: OngWhereInput
    isNot?: OngWhereInput
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    ong_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    race?: SortOrder
    color?: SortOrder
    adoption_status?: SortOrder
    image_urls?: SortOrder
    created_at?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    ong_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    race?: SortOrder
    color?: SortOrder
    adoption_status?: SortOrder
    created_at?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    ong_id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    sex?: SortOrder
    race?: SortOrder
    color?: SortOrder
    adoption_status?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAdoptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdoptionStatus | EnumAdoptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdoptionStatus[] | ListEnumAdoptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdoptionStatus[] | ListEnumAdoptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdoptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdoptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdoptionStatusFilter<$PrismaModel>
    _max?: NestedEnumAdoptionStatusFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OngCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image_user?: SortOrder
    image_urls?: SortOrder
    created_at?: SortOrder
  }

  export type OngMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image_user?: SortOrder
    created_at?: SortOrder
  }

  export type OngMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image_user?: SortOrder
    created_at?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PetRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type AdoptionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pet_id?: SortOrder
    adopted_at?: SortOrder
  }

  export type AdoptionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pet_id?: SortOrder
    adopted_at?: SortOrder
  }

  export type AdoptionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pet_id?: SortOrder
    adopted_at?: SortOrder
  }

  export type OngCreateNestedOneWithoutUsersInput = {
    create?: XOR<OngCreateWithoutUsersInput, OngUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OngCreateOrConnectWithoutUsersInput
    connect?: OngWhereUniqueInput
  }

  export type AdoptionCreateNestedManyWithoutUserInput = {
    create?: XOR<AdoptionCreateWithoutUserInput, AdoptionUncheckedCreateWithoutUserInput> | AdoptionCreateWithoutUserInput[] | AdoptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutUserInput | AdoptionCreateOrConnectWithoutUserInput[]
    createMany?: AdoptionCreateManyUserInputEnvelope
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
  }

  export type AdoptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdoptionCreateWithoutUserInput, AdoptionUncheckedCreateWithoutUserInput> | AdoptionCreateWithoutUserInput[] | AdoptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutUserInput | AdoptionCreateOrConnectWithoutUserInput[]
    createMany?: AdoptionCreateManyUserInputEnvelope
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OngUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OngCreateWithoutUsersInput, OngUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OngCreateOrConnectWithoutUsersInput
    upsert?: OngUpsertWithoutUsersInput
    disconnect?: OngWhereInput | boolean
    delete?: OngWhereInput | boolean
    connect?: OngWhereUniqueInput
    update?: XOR<XOR<OngUpdateToOneWithWhereWithoutUsersInput, OngUpdateWithoutUsersInput>, OngUncheckedUpdateWithoutUsersInput>
  }

  export type AdoptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdoptionCreateWithoutUserInput, AdoptionUncheckedCreateWithoutUserInput> | AdoptionCreateWithoutUserInput[] | AdoptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutUserInput | AdoptionCreateOrConnectWithoutUserInput[]
    upsert?: AdoptionUpsertWithWhereUniqueWithoutUserInput | AdoptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdoptionCreateManyUserInputEnvelope
    set?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    disconnect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    delete?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    update?: AdoptionUpdateWithWhereUniqueWithoutUserInput | AdoptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdoptionUpdateManyWithWhereWithoutUserInput | AdoptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AdoptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdoptionCreateWithoutUserInput, AdoptionUncheckedCreateWithoutUserInput> | AdoptionCreateWithoutUserInput[] | AdoptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutUserInput | AdoptionCreateOrConnectWithoutUserInput[]
    upsert?: AdoptionUpsertWithWhereUniqueWithoutUserInput | AdoptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdoptionCreateManyUserInputEnvelope
    set?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    disconnect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    delete?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    update?: AdoptionUpdateWithWhereUniqueWithoutUserInput | AdoptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdoptionUpdateManyWithWhereWithoutUserInput | AdoptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
  }

  export type PetCreateimage_urlsInput = {
    set: string[]
  }

  export type AdoptionCreateNestedManyWithoutPetInput = {
    create?: XOR<AdoptionCreateWithoutPetInput, AdoptionUncheckedCreateWithoutPetInput> | AdoptionCreateWithoutPetInput[] | AdoptionUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutPetInput | AdoptionCreateOrConnectWithoutPetInput[]
    createMany?: AdoptionCreateManyPetInputEnvelope
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
  }

  export type OngCreateNestedOneWithoutPetsInput = {
    create?: XOR<OngCreateWithoutPetsInput, OngUncheckedCreateWithoutPetsInput>
    connectOrCreate?: OngCreateOrConnectWithoutPetsInput
    connect?: OngWhereUniqueInput
  }

  export type AdoptionUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<AdoptionCreateWithoutPetInput, AdoptionUncheckedCreateWithoutPetInput> | AdoptionCreateWithoutPetInput[] | AdoptionUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutPetInput | AdoptionCreateOrConnectWithoutPetInput[]
    createMany?: AdoptionCreateManyPetInputEnvelope
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumAdoptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdoptionStatus
  }

  export type PetUpdateimage_urlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AdoptionUpdateManyWithoutPetNestedInput = {
    create?: XOR<AdoptionCreateWithoutPetInput, AdoptionUncheckedCreateWithoutPetInput> | AdoptionCreateWithoutPetInput[] | AdoptionUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutPetInput | AdoptionCreateOrConnectWithoutPetInput[]
    upsert?: AdoptionUpsertWithWhereUniqueWithoutPetInput | AdoptionUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AdoptionCreateManyPetInputEnvelope
    set?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    disconnect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    delete?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    update?: AdoptionUpdateWithWhereUniqueWithoutPetInput | AdoptionUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AdoptionUpdateManyWithWhereWithoutPetInput | AdoptionUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
  }

  export type OngUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<OngCreateWithoutPetsInput, OngUncheckedCreateWithoutPetsInput>
    connectOrCreate?: OngCreateOrConnectWithoutPetsInput
    upsert?: OngUpsertWithoutPetsInput
    connect?: OngWhereUniqueInput
    update?: XOR<XOR<OngUpdateToOneWithWhereWithoutPetsInput, OngUpdateWithoutPetsInput>, OngUncheckedUpdateWithoutPetsInput>
  }

  export type AdoptionUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<AdoptionCreateWithoutPetInput, AdoptionUncheckedCreateWithoutPetInput> | AdoptionCreateWithoutPetInput[] | AdoptionUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AdoptionCreateOrConnectWithoutPetInput | AdoptionCreateOrConnectWithoutPetInput[]
    upsert?: AdoptionUpsertWithWhereUniqueWithoutPetInput | AdoptionUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AdoptionCreateManyPetInputEnvelope
    set?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    disconnect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    delete?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    connect?: AdoptionWhereUniqueInput | AdoptionWhereUniqueInput[]
    update?: AdoptionUpdateWithWhereUniqueWithoutPetInput | AdoptionUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AdoptionUpdateManyWithWhereWithoutPetInput | AdoptionUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
  }

  export type OngCreateimage_urlsInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutOngInput = {
    create?: XOR<UserCreateWithoutOngInput, UserUncheckedCreateWithoutOngInput> | UserCreateWithoutOngInput[] | UserUncheckedCreateWithoutOngInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOngInput | UserCreateOrConnectWithoutOngInput[]
    createMany?: UserCreateManyOngInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PetCreateNestedManyWithoutOngInput = {
    create?: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput> | PetCreateWithoutOngInput[] | PetUncheckedCreateWithoutOngInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOngInput | PetCreateOrConnectWithoutOngInput[]
    createMany?: PetCreateManyOngInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOngInput = {
    create?: XOR<UserCreateWithoutOngInput, UserUncheckedCreateWithoutOngInput> | UserCreateWithoutOngInput[] | UserUncheckedCreateWithoutOngInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOngInput | UserCreateOrConnectWithoutOngInput[]
    createMany?: UserCreateManyOngInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutOngInput = {
    create?: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput> | PetCreateWithoutOngInput[] | PetUncheckedCreateWithoutOngInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOngInput | PetCreateOrConnectWithoutOngInput[]
    createMany?: PetCreateManyOngInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type OngUpdateimage_urlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateManyWithoutOngNestedInput = {
    create?: XOR<UserCreateWithoutOngInput, UserUncheckedCreateWithoutOngInput> | UserCreateWithoutOngInput[] | UserUncheckedCreateWithoutOngInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOngInput | UserCreateOrConnectWithoutOngInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOngInput | UserUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: UserCreateManyOngInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOngInput | UserUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOngInput | UserUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PetUpdateManyWithoutOngNestedInput = {
    create?: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput> | PetCreateWithoutOngInput[] | PetUncheckedCreateWithoutOngInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOngInput | PetCreateOrConnectWithoutOngInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOngInput | PetUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: PetCreateManyOngInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOngInput | PetUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOngInput | PetUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOngNestedInput = {
    create?: XOR<UserCreateWithoutOngInput, UserUncheckedCreateWithoutOngInput> | UserCreateWithoutOngInput[] | UserUncheckedCreateWithoutOngInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOngInput | UserCreateOrConnectWithoutOngInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOngInput | UserUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: UserCreateManyOngInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOngInput | UserUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOngInput | UserUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutOngNestedInput = {
    create?: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput> | PetCreateWithoutOngInput[] | PetUncheckedCreateWithoutOngInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOngInput | PetCreateOrConnectWithoutOngInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOngInput | PetUpsertWithWhereUniqueWithoutOngInput[]
    createMany?: PetCreateManyOngInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOngInput | PetUpdateWithWhereUniqueWithoutOngInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOngInput | PetUpdateManyWithWhereWithoutOngInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<UserCreateWithoutAdoptionInput, UserUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdoptionInput
    connect?: UserWhereUniqueInput
  }

  export type PetCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<PetCreateWithoutAdoptionInput, PetUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: PetCreateOrConnectWithoutAdoptionInput
    connect?: PetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdoptionNestedInput = {
    create?: XOR<UserCreateWithoutAdoptionInput, UserUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdoptionInput
    upsert?: UserUpsertWithoutAdoptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdoptionInput, UserUpdateWithoutAdoptionInput>, UserUncheckedUpdateWithoutAdoptionInput>
  }

  export type PetUpdateOneRequiredWithoutAdoptionNestedInput = {
    create?: XOR<PetCreateWithoutAdoptionInput, PetUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: PetCreateOrConnectWithoutAdoptionInput
    upsert?: PetUpsertWithoutAdoptionInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutAdoptionInput, PetUpdateWithoutAdoptionInput>, PetUncheckedUpdateWithoutAdoptionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumAdoptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdoptionStatus | EnumAdoptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdoptionStatus[] | ListEnumAdoptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdoptionStatus[] | ListEnumAdoptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdoptionStatusFilter<$PrismaModel> | $Enums.AdoptionStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAdoptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdoptionStatus | EnumAdoptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdoptionStatus[] | ListEnumAdoptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdoptionStatus[] | ListEnumAdoptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdoptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdoptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdoptionStatusFilter<$PrismaModel>
    _max?: NestedEnumAdoptionStatusFilter<$PrismaModel>
  }

  export type OngCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    image_user: string
    image_urls?: OngCreateimage_urlsInput | string[]
    created_at?: Date | string
    pets?: PetCreateNestedManyWithoutOngInput
  }

  export type OngUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    image_user: string
    image_urls?: OngCreateimage_urlsInput | string[]
    created_at?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngCreateOrConnectWithoutUsersInput = {
    where: OngWhereUniqueInput
    create: XOR<OngCreateWithoutUsersInput, OngUncheckedCreateWithoutUsersInput>
  }

  export type AdoptionCreateWithoutUserInput = {
    id?: string
    adopted_at: Date | string
    pet: PetCreateNestedOneWithoutAdoptionInput
  }

  export type AdoptionUncheckedCreateWithoutUserInput = {
    id?: string
    pet_id: string
    adopted_at: Date | string
  }

  export type AdoptionCreateOrConnectWithoutUserInput = {
    where: AdoptionWhereUniqueInput
    create: XOR<AdoptionCreateWithoutUserInput, AdoptionUncheckedCreateWithoutUserInput>
  }

  export type AdoptionCreateManyUserInputEnvelope = {
    data: AdoptionCreateManyUserInput | AdoptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OngUpsertWithoutUsersInput = {
    update: XOR<OngUpdateWithoutUsersInput, OngUncheckedUpdateWithoutUsersInput>
    create: XOR<OngCreateWithoutUsersInput, OngUncheckedCreateWithoutUsersInput>
    where?: OngWhereInput
  }

  export type OngUpdateToOneWithWhereWithoutUsersInput = {
    where?: OngWhereInput
    data: XOR<OngUpdateWithoutUsersInput, OngUncheckedUpdateWithoutUsersInput>
  }

  export type OngUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    image_urls?: OngUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    image_urls?: OngUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutOngNestedInput
  }

  export type AdoptionUpsertWithWhereUniqueWithoutUserInput = {
    where: AdoptionWhereUniqueInput
    update: XOR<AdoptionUpdateWithoutUserInput, AdoptionUncheckedUpdateWithoutUserInput>
    create: XOR<AdoptionCreateWithoutUserInput, AdoptionUncheckedCreateWithoutUserInput>
  }

  export type AdoptionUpdateWithWhereUniqueWithoutUserInput = {
    where: AdoptionWhereUniqueInput
    data: XOR<AdoptionUpdateWithoutUserInput, AdoptionUncheckedUpdateWithoutUserInput>
  }

  export type AdoptionUpdateManyWithWhereWithoutUserInput = {
    where: AdoptionScalarWhereInput
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyWithoutUserInput>
  }

  export type AdoptionScalarWhereInput = {
    AND?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
    OR?: AdoptionScalarWhereInput[]
    NOT?: AdoptionScalarWhereInput | AdoptionScalarWhereInput[]
    id?: StringFilter<"Adoption"> | string
    user_id?: StringFilter<"Adoption"> | string
    pet_id?: StringFilter<"Adoption"> | string
    adopted_at?: DateTimeFilter<"Adoption"> | Date | string
  }

  export type AdoptionCreateWithoutPetInput = {
    id?: string
    adopted_at: Date | string
    user: UserCreateNestedOneWithoutAdoptionInput
  }

  export type AdoptionUncheckedCreateWithoutPetInput = {
    id?: string
    user_id: string
    adopted_at: Date | string
  }

  export type AdoptionCreateOrConnectWithoutPetInput = {
    where: AdoptionWhereUniqueInput
    create: XOR<AdoptionCreateWithoutPetInput, AdoptionUncheckedCreateWithoutPetInput>
  }

  export type AdoptionCreateManyPetInputEnvelope = {
    data: AdoptionCreateManyPetInput | AdoptionCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type OngCreateWithoutPetsInput = {
    id?: string
    name: string
    description: string
    image_user: string
    image_urls?: OngCreateimage_urlsInput | string[]
    created_at?: Date | string
    users?: UserCreateNestedManyWithoutOngInput
  }

  export type OngUncheckedCreateWithoutPetsInput = {
    id?: string
    name: string
    description: string
    image_user: string
    image_urls?: OngCreateimage_urlsInput | string[]
    created_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOngInput
  }

  export type OngCreateOrConnectWithoutPetsInput = {
    where: OngWhereUniqueInput
    create: XOR<OngCreateWithoutPetsInput, OngUncheckedCreateWithoutPetsInput>
  }

  export type AdoptionUpsertWithWhereUniqueWithoutPetInput = {
    where: AdoptionWhereUniqueInput
    update: XOR<AdoptionUpdateWithoutPetInput, AdoptionUncheckedUpdateWithoutPetInput>
    create: XOR<AdoptionCreateWithoutPetInput, AdoptionUncheckedCreateWithoutPetInput>
  }

  export type AdoptionUpdateWithWhereUniqueWithoutPetInput = {
    where: AdoptionWhereUniqueInput
    data: XOR<AdoptionUpdateWithoutPetInput, AdoptionUncheckedUpdateWithoutPetInput>
  }

  export type AdoptionUpdateManyWithWhereWithoutPetInput = {
    where: AdoptionScalarWhereInput
    data: XOR<AdoptionUpdateManyMutationInput, AdoptionUncheckedUpdateManyWithoutPetInput>
  }

  export type OngUpsertWithoutPetsInput = {
    update: XOR<OngUpdateWithoutPetsInput, OngUncheckedUpdateWithoutPetsInput>
    create: XOR<OngCreateWithoutPetsInput, OngUncheckedCreateWithoutPetsInput>
    where?: OngWhereInput
  }

  export type OngUpdateToOneWithWhereWithoutPetsInput = {
    where?: OngWhereInput
    data: XOR<OngUpdateWithoutPetsInput, OngUncheckedUpdateWithoutPetsInput>
  }

  export type OngUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    image_urls?: OngUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOngNestedInput
  }

  export type OngUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image_user?: StringFieldUpdateOperationsInput | string
    image_urls?: OngUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOngNestedInput
  }

  export type UserCreateWithoutOngInput = {
    id?: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
    adoption?: AdoptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOngInput = {
    id?: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
    adoption?: AdoptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOngInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOngInput, UserUncheckedCreateWithoutOngInput>
  }

  export type UserCreateManyOngInputEnvelope = {
    data: UserCreateManyOngInput | UserCreateManyOngInput[]
    skipDuplicates?: boolean
  }

  export type PetCreateWithoutOngInput = {
    id?: string
    name: string
    age: Date | string
    sex: string
    race: string
    color: string
    adoption_status?: $Enums.AdoptionStatus
    image_urls?: PetCreateimage_urlsInput | string[]
    created_at?: Date | string
    adoption?: AdoptionCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutOngInput = {
    id?: string
    name: string
    age: Date | string
    sex: string
    race: string
    color: string
    adoption_status?: $Enums.AdoptionStatus
    image_urls?: PetCreateimage_urlsInput | string[]
    created_at?: Date | string
    adoption?: AdoptionUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutOngInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput>
  }

  export type PetCreateManyOngInputEnvelope = {
    data: PetCreateManyOngInput | PetCreateManyOngInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutOngInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOngInput, UserUncheckedUpdateWithoutOngInput>
    create: XOR<UserCreateWithoutOngInput, UserUncheckedCreateWithoutOngInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOngInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOngInput, UserUncheckedUpdateWithoutOngInput>
  }

  export type UserUpdateManyWithWhereWithoutOngInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOngInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image_url?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    ong_id?: StringNullableFilter<"User"> | string | null
  }

  export type PetUpsertWithWhereUniqueWithoutOngInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutOngInput, PetUncheckedUpdateWithoutOngInput>
    create: XOR<PetCreateWithoutOngInput, PetUncheckedCreateWithoutOngInput>
  }

  export type PetUpdateWithWhereUniqueWithoutOngInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutOngInput, PetUncheckedUpdateWithoutOngInput>
  }

  export type PetUpdateManyWithWhereWithoutOngInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutOngInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: StringFilter<"Pet"> | string
    ong_id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    age?: DateTimeFilter<"Pet"> | Date | string
    sex?: StringFilter<"Pet"> | string
    race?: StringFilter<"Pet"> | string
    color?: StringFilter<"Pet"> | string
    adoption_status?: EnumAdoptionStatusFilter<"Pet"> | $Enums.AdoptionStatus
    image_urls?: StringNullableListFilter<"Pet">
    created_at?: DateTimeFilter<"Pet"> | Date | string
  }

  export type UserCreateWithoutAdoptionInput = {
    id?: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
    ong?: OngCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAdoptionInput = {
    id?: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
    ong_id?: string | null
  }

  export type UserCreateOrConnectWithoutAdoptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdoptionInput, UserUncheckedCreateWithoutAdoptionInput>
  }

  export type PetCreateWithoutAdoptionInput = {
    id?: string
    name: string
    age: Date | string
    sex: string
    race: string
    color: string
    adoption_status?: $Enums.AdoptionStatus
    image_urls?: PetCreateimage_urlsInput | string[]
    created_at?: Date | string
    ong: OngCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutAdoptionInput = {
    id?: string
    ong_id: string
    name: string
    age: Date | string
    sex: string
    race: string
    color: string
    adoption_status?: $Enums.AdoptionStatus
    image_urls?: PetCreateimage_urlsInput | string[]
    created_at?: Date | string
  }

  export type PetCreateOrConnectWithoutAdoptionInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutAdoptionInput, PetUncheckedCreateWithoutAdoptionInput>
  }

  export type UserUpsertWithoutAdoptionInput = {
    update: XOR<UserUpdateWithoutAdoptionInput, UserUncheckedUpdateWithoutAdoptionInput>
    create: XOR<UserCreateWithoutAdoptionInput, UserUncheckedCreateWithoutAdoptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdoptionInput, UserUncheckedUpdateWithoutAdoptionInput>
  }

  export type UserUpdateWithoutAdoptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ong?: OngUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAdoptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ong_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetUpsertWithoutAdoptionInput = {
    update: XOR<PetUpdateWithoutAdoptionInput, PetUncheckedUpdateWithoutAdoptionInput>
    create: XOR<PetCreateWithoutAdoptionInput, PetUncheckedCreateWithoutAdoptionInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutAdoptionInput, PetUncheckedUpdateWithoutAdoptionInput>
  }

  export type PetUpdateWithoutAdoptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ong?: OngUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutAdoptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ong_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdoptionCreateManyUserInput = {
    id?: string
    pet_id: string
    adopted_at: Date | string
  }

  export type AdoptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutAdoptionNestedInput
  }

  export type AdoptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pet_id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdoptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pet_id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdoptionCreateManyPetInput = {
    id?: string
    user_id: string
    adopted_at: Date | string
  }

  export type AdoptionUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdoptionNestedInput
  }

  export type AdoptionUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdoptionUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    adopted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyOngInput = {
    id?: string
    email: string
    cpf: string
    phone: string
    name: string
    password: string
    image_url: string
    role: $Enums.UserRole
  }

  export type PetCreateManyOngInput = {
    id?: string
    name: string
    age: Date | string
    sex: string
    race: string
    color: string
    adoption_status?: $Enums.AdoptionStatus
    image_urls?: PetCreateimage_urlsInput | string[]
    created_at?: Date | string
  }

  export type UserUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    adoption?: AdoptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    adoption?: AdoptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type PetUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption?: AdoptionUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption?: AdoptionUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutOngInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: DateTimeFieldUpdateOperationsInput | Date | string
    sex?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    adoption_status?: EnumAdoptionStatusFieldUpdateOperationsInput | $Enums.AdoptionStatus
    image_urls?: PetUpdateimage_urlsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PetCountOutputTypeDefaultArgs instead
     */
    export type PetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OngCountOutputTypeDefaultArgs instead
     */
    export type OngCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OngCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PetDefaultArgs instead
     */
    export type PetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OngDefaultArgs instead
     */
    export type OngArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OngDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdoptionDefaultArgs instead
     */
    export type AdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdoptionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}