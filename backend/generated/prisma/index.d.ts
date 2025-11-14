
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
 * Model device
 * 
 */
export type device = $Result.DefaultSelection<Prisma.$devicePayload>
/**
 * Model led_activity
 * 
 */
export type led_activity = $Result.DefaultSelection<Prisma.$led_activityPayload>
/**
 * Model sensors
 * 
 */
export type sensors = $Result.DefaultSelection<Prisma.$sensorsPayload>
/**
 * Model temperature_humidity
 * 
 */
export type temperature_humidity = $Result.DefaultSelection<Prisma.$temperature_humidityPayload>
/**
 * Model login
 * 
 */
export type login = $Result.DefaultSelection<Prisma.$loginPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Devices
 * const devices = await prisma.device.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Devices
   * const devices = await prisma.device.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.device`: Exposes CRUD operations for the **device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.deviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.led_activity`: Exposes CRUD operations for the **led_activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Led_activities
    * const led_activities = await prisma.led_activity.findMany()
    * ```
    */
  get led_activity(): Prisma.led_activityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensors`: Exposes CRUD operations for the **sensors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sensors
    * const sensors = await prisma.sensors.findMany()
    * ```
    */
  get sensors(): Prisma.sensorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.temperature_humidity`: Exposes CRUD operations for the **temperature_humidity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Temperature_humidities
    * const temperature_humidities = await prisma.temperature_humidity.findMany()
    * ```
    */
  get temperature_humidity(): Prisma.temperature_humidityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.login`: Exposes CRUD operations for the **login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logins
    * const logins = await prisma.login.findMany()
    * ```
    */
  get login(): Prisma.loginDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    device: 'device',
    led_activity: 'led_activity',
    sensors: 'sensors',
    temperature_humidity: 'temperature_humidity',
    login: 'login'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "device" | "led_activity" | "sensors" | "temperature_humidity" | "login"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      device: {
        payload: Prisma.$devicePayload<ExtArgs>
        fields: Prisma.deviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          findFirst: {
            args: Prisma.deviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          findMany: {
            args: Prisma.deviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>[]
          }
          create: {
            args: Prisma.deviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          createMany: {
            args: Prisma.deviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.deviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          update: {
            args: Prisma.deviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          deleteMany: {
            args: Prisma.deviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.deviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.deviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.deviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      led_activity: {
        payload: Prisma.$led_activityPayload<ExtArgs>
        fields: Prisma.led_activityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.led_activityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.led_activityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload>
          }
          findFirst: {
            args: Prisma.led_activityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.led_activityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload>
          }
          findMany: {
            args: Prisma.led_activityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload>[]
          }
          create: {
            args: Prisma.led_activityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload>
          }
          createMany: {
            args: Prisma.led_activityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.led_activityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload>
          }
          update: {
            args: Prisma.led_activityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload>
          }
          deleteMany: {
            args: Prisma.led_activityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.led_activityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.led_activityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$led_activityPayload>
          }
          aggregate: {
            args: Prisma.Led_activityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLed_activity>
          }
          groupBy: {
            args: Prisma.led_activityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Led_activityGroupByOutputType>[]
          }
          count: {
            args: Prisma.led_activityCountArgs<ExtArgs>
            result: $Utils.Optional<Led_activityCountAggregateOutputType> | number
          }
        }
      }
      sensors: {
        payload: Prisma.$sensorsPayload<ExtArgs>
        fields: Prisma.sensorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sensorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sensorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload>
          }
          findFirst: {
            args: Prisma.sensorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sensorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload>
          }
          findMany: {
            args: Prisma.sensorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload>[]
          }
          create: {
            args: Prisma.sensorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload>
          }
          createMany: {
            args: Prisma.sensorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sensorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload>
          }
          update: {
            args: Prisma.sensorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload>
          }
          deleteMany: {
            args: Prisma.sensorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sensorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sensorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sensorsPayload>
          }
          aggregate: {
            args: Prisma.SensorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensors>
          }
          groupBy: {
            args: Prisma.sensorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sensorsCountArgs<ExtArgs>
            result: $Utils.Optional<SensorsCountAggregateOutputType> | number
          }
        }
      }
      temperature_humidity: {
        payload: Prisma.$temperature_humidityPayload<ExtArgs>
        fields: Prisma.temperature_humidityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.temperature_humidityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.temperature_humidityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload>
          }
          findFirst: {
            args: Prisma.temperature_humidityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.temperature_humidityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload>
          }
          findMany: {
            args: Prisma.temperature_humidityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload>[]
          }
          create: {
            args: Prisma.temperature_humidityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload>
          }
          createMany: {
            args: Prisma.temperature_humidityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.temperature_humidityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload>
          }
          update: {
            args: Prisma.temperature_humidityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload>
          }
          deleteMany: {
            args: Prisma.temperature_humidityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.temperature_humidityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.temperature_humidityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$temperature_humidityPayload>
          }
          aggregate: {
            args: Prisma.Temperature_humidityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemperature_humidity>
          }
          groupBy: {
            args: Prisma.temperature_humidityGroupByArgs<ExtArgs>
            result: $Utils.Optional<Temperature_humidityGroupByOutputType>[]
          }
          count: {
            args: Prisma.temperature_humidityCountArgs<ExtArgs>
            result: $Utils.Optional<Temperature_humidityCountAggregateOutputType> | number
          }
        }
      }
      login: {
        payload: Prisma.$loginPayload<ExtArgs>
        fields: Prisma.loginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          findFirst: {
            args: Prisma.loginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          findMany: {
            args: Prisma.loginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>[]
          }
          create: {
            args: Prisma.loginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          createMany: {
            args: Prisma.loginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.loginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          update: {
            args: Prisma.loginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          deleteMany: {
            args: Prisma.loginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.loginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.loginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$loginPayload>
          }
          aggregate: {
            args: Prisma.LoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogin>
          }
          groupBy: {
            args: Prisma.loginGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.loginCountArgs<ExtArgs>
            result: $Utils.Optional<LoginCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    device?: deviceOmit
    led_activity?: led_activityOmit
    sensors?: sensorsOmit
    temperature_humidity?: temperature_humidityOmit
    login?: loginOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    sensors: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | DeviceCountOutputTypeCountSensorsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sensorsWhereInput
  }


  /**
   * Count Type SensorsCountOutputType
   */

  export type SensorsCountOutputType = {
    led_activity: number
    temperature_humidity: number
  }

  export type SensorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    led_activity?: boolean | SensorsCountOutputTypeCountLed_activityArgs
    temperature_humidity?: boolean | SensorsCountOutputTypeCountTemperature_humidityArgs
  }

  // Custom InputTypes
  /**
   * SensorsCountOutputType without action
   */
  export type SensorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorsCountOutputType
     */
    select?: SensorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SensorsCountOutputType without action
   */
  export type SensorsCountOutputTypeCountLed_activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: led_activityWhereInput
  }

  /**
   * SensorsCountOutputType without action
   */
  export type SensorsCountOutputTypeCountTemperature_humidityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temperature_humidityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    deviceid: number | null
  }

  export type DeviceSumAggregateOutputType = {
    deviceid: number | null
  }

  export type DeviceMinAggregateOutputType = {
    deviceid: number | null
    device_name: string | null
    device_purpose: string | null
    device_ip: string | null
    status: string | null
    isdeleted: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    deviceid: number | null
    device_name: string | null
    device_purpose: string | null
    device_ip: string | null
    status: string | null
    isdeleted: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    deviceid: number
    device_name: number
    device_purpose: number
    device_ip: number
    status: number
    isdeleted: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    deviceid?: true
  }

  export type DeviceSumAggregateInputType = {
    deviceid?: true
  }

  export type DeviceMinAggregateInputType = {
    deviceid?: true
    device_name?: true
    device_purpose?: true
    device_ip?: true
    status?: true
    isdeleted?: true
  }

  export type DeviceMaxAggregateInputType = {
    deviceid?: true
    device_name?: true
    device_purpose?: true
    device_ip?: true
    status?: true
    isdeleted?: true
  }

  export type DeviceCountAggregateInputType = {
    deviceid?: true
    device_name?: true
    device_purpose?: true
    device_ip?: true
    status?: true
    isdeleted?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device to aggregate.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type deviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deviceWhereInput
    orderBy?: deviceOrderByWithAggregationInput | deviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: deviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    deviceid: number
    device_name: string
    device_purpose: string | null
    device_ip: string | null
    status: string | null
    isdeleted: Date | null
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends deviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type deviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceid?: boolean
    device_name?: boolean
    device_purpose?: boolean
    device_ip?: boolean
    status?: boolean
    isdeleted?: boolean
    sensors?: boolean | device$sensorsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>



  export type deviceSelectScalar = {
    deviceid?: boolean
    device_name?: boolean
    device_purpose?: boolean
    device_ip?: boolean
    status?: boolean
    isdeleted?: boolean
  }

  export type deviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deviceid" | "device_name" | "device_purpose" | "device_ip" | "status" | "isdeleted", ExtArgs["result"]["device"]>
  export type deviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | device$sensorsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $devicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "device"
    objects: {
      sensors: Prisma.$sensorsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      deviceid: number
      device_name: string
      device_purpose: string | null
      device_ip: string | null
      status: string | null
      isdeleted: Date | null
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type deviceGetPayload<S extends boolean | null | undefined | deviceDefaultArgs> = $Result.GetResult<Prisma.$devicePayload, S>

  type deviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface deviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device'], meta: { name: 'device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {deviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deviceFindUniqueArgs>(args: SelectSubset<T, deviceFindUniqueArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deviceFindUniqueOrThrowArgs>(args: SelectSubset<T, deviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deviceFindFirstArgs>(args?: SelectSubset<T, deviceFindFirstArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deviceFindFirstOrThrowArgs>(args?: SelectSubset<T, deviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `deviceid`
     * const deviceWithDeviceidOnly = await prisma.device.findMany({ select: { deviceid: true } })
     * 
     */
    findMany<T extends deviceFindManyArgs>(args?: SelectSubset<T, deviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {deviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends deviceCreateArgs>(args: SelectSubset<T, deviceCreateArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {deviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deviceCreateManyArgs>(args?: SelectSubset<T, deviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Device.
     * @param {deviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends deviceDeleteArgs>(args: SelectSubset<T, deviceDeleteArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {deviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deviceUpdateArgs>(args: SelectSubset<T, deviceUpdateArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {deviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deviceDeleteManyArgs>(args?: SelectSubset<T, deviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deviceUpdateManyArgs>(args: SelectSubset<T, deviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {deviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends deviceUpsertArgs>(args: SelectSubset<T, deviceUpsertArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends deviceCountArgs>(
      args?: Subset<T, deviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceGroupByArgs} args - Group by arguments.
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
      T extends deviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deviceGroupByArgs['orderBy'] }
        : { orderBy?: deviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, deviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the device model
   */
  readonly fields: deviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensors<T extends device$sensorsArgs<ExtArgs> = {}>(args?: Subset<T, device$sensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the device model
   */
  interface deviceFieldRefs {
    readonly deviceid: FieldRef<"device", 'Int'>
    readonly device_name: FieldRef<"device", 'String'>
    readonly device_purpose: FieldRef<"device", 'String'>
    readonly device_ip: FieldRef<"device", 'String'>
    readonly status: FieldRef<"device", 'String'>
    readonly isdeleted: FieldRef<"device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * device findUnique
   */
  export type deviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device findUniqueOrThrow
   */
  export type deviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device findFirst
   */
  export type deviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device findFirstOrThrow
   */
  export type deviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device findMany
   */
  export type deviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter, which devices to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device create
   */
  export type deviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The data needed to create a device.
     */
    data: XOR<deviceCreateInput, deviceUncheckedCreateInput>
  }

  /**
   * device createMany
   */
  export type deviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devices.
     */
    data: deviceCreateManyInput | deviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device update
   */
  export type deviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The data needed to update a device.
     */
    data: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>
    /**
     * Choose, which device to update.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device updateMany
   */
  export type deviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devices.
     */
    data: XOR<deviceUpdateManyMutationInput, deviceUncheckedUpdateManyInput>
    /**
     * Filter which devices to update
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to update.
     */
    limit?: number
  }

  /**
   * device upsert
   */
  export type deviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * The filter to search for the device to update in case it exists.
     */
    where: deviceWhereUniqueInput
    /**
     * In case the device found by the `where` argument doesn't exist, create a new device with this data.
     */
    create: XOR<deviceCreateInput, deviceUncheckedCreateInput>
    /**
     * In case the device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>
  }

  /**
   * device delete
   */
  export type deviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    /**
     * Filter which device to delete.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device deleteMany
   */
  export type deviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devices to delete
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to delete.
     */
    limit?: number
  }

  /**
   * device.sensors
   */
  export type device$sensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    where?: sensorsWhereInput
    orderBy?: sensorsOrderByWithRelationInput | sensorsOrderByWithRelationInput[]
    cursor?: sensorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorsScalarFieldEnum | SensorsScalarFieldEnum[]
  }

  /**
   * device without action
   */
  export type deviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
  }


  /**
   * Model led_activity
   */

  export type AggregateLed_activity = {
    _count: Led_activityCountAggregateOutputType | null
    _avg: Led_activityAvgAggregateOutputType | null
    _sum: Led_activitySumAggregateOutputType | null
    _min: Led_activityMinAggregateOutputType | null
    _max: Led_activityMaxAggregateOutputType | null
  }

  export type Led_activityAvgAggregateOutputType = {
    led_activitiyid: number | null
    sensorid: number | null
    activated: number | null
  }

  export type Led_activitySumAggregateOutputType = {
    led_activitiyid: number | null
    sensorid: number | null
    activated: number | null
  }

  export type Led_activityMinAggregateOutputType = {
    led_activitiyid: number | null
    sensorid: number | null
    activated: number | null
    datetime: Date | null
    isdeleted: Date | null
  }

  export type Led_activityMaxAggregateOutputType = {
    led_activitiyid: number | null
    sensorid: number | null
    activated: number | null
    datetime: Date | null
    isdeleted: Date | null
  }

  export type Led_activityCountAggregateOutputType = {
    led_activitiyid: number
    sensorid: number
    activated: number
    datetime: number
    isdeleted: number
    _all: number
  }


  export type Led_activityAvgAggregateInputType = {
    led_activitiyid?: true
    sensorid?: true
    activated?: true
  }

  export type Led_activitySumAggregateInputType = {
    led_activitiyid?: true
    sensorid?: true
    activated?: true
  }

  export type Led_activityMinAggregateInputType = {
    led_activitiyid?: true
    sensorid?: true
    activated?: true
    datetime?: true
    isdeleted?: true
  }

  export type Led_activityMaxAggregateInputType = {
    led_activitiyid?: true
    sensorid?: true
    activated?: true
    datetime?: true
    isdeleted?: true
  }

  export type Led_activityCountAggregateInputType = {
    led_activitiyid?: true
    sensorid?: true
    activated?: true
    datetime?: true
    isdeleted?: true
    _all?: true
  }

  export type Led_activityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which led_activity to aggregate.
     */
    where?: led_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of led_activities to fetch.
     */
    orderBy?: led_activityOrderByWithRelationInput | led_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: led_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` led_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` led_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned led_activities
    **/
    _count?: true | Led_activityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Led_activityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Led_activitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Led_activityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Led_activityMaxAggregateInputType
  }

  export type GetLed_activityAggregateType<T extends Led_activityAggregateArgs> = {
        [P in keyof T & keyof AggregateLed_activity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLed_activity[P]>
      : GetScalarType<T[P], AggregateLed_activity[P]>
  }




  export type led_activityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: led_activityWhereInput
    orderBy?: led_activityOrderByWithAggregationInput | led_activityOrderByWithAggregationInput[]
    by: Led_activityScalarFieldEnum[] | Led_activityScalarFieldEnum
    having?: led_activityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Led_activityCountAggregateInputType | true
    _avg?: Led_activityAvgAggregateInputType
    _sum?: Led_activitySumAggregateInputType
    _min?: Led_activityMinAggregateInputType
    _max?: Led_activityMaxAggregateInputType
  }

  export type Led_activityGroupByOutputType = {
    led_activitiyid: number
    sensorid: number
    activated: number | null
    datetime: Date | null
    isdeleted: Date | null
    _count: Led_activityCountAggregateOutputType | null
    _avg: Led_activityAvgAggregateOutputType | null
    _sum: Led_activitySumAggregateOutputType | null
    _min: Led_activityMinAggregateOutputType | null
    _max: Led_activityMaxAggregateOutputType | null
  }

  type GetLed_activityGroupByPayload<T extends led_activityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Led_activityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Led_activityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Led_activityGroupByOutputType[P]>
            : GetScalarType<T[P], Led_activityGroupByOutputType[P]>
        }
      >
    >


  export type led_activitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    led_activitiyid?: boolean
    sensorid?: boolean
    activated?: boolean
    datetime?: boolean
    isdeleted?: boolean
    sensors?: boolean | sensorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["led_activity"]>



  export type led_activitySelectScalar = {
    led_activitiyid?: boolean
    sensorid?: boolean
    activated?: boolean
    datetime?: boolean
    isdeleted?: boolean
  }

  export type led_activityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"led_activitiyid" | "sensorid" | "activated" | "datetime" | "isdeleted", ExtArgs["result"]["led_activity"]>
  export type led_activityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | sensorsDefaultArgs<ExtArgs>
  }

  export type $led_activityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "led_activity"
    objects: {
      sensors: Prisma.$sensorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      led_activitiyid: number
      sensorid: number
      activated: number | null
      datetime: Date | null
      isdeleted: Date | null
    }, ExtArgs["result"]["led_activity"]>
    composites: {}
  }

  type led_activityGetPayload<S extends boolean | null | undefined | led_activityDefaultArgs> = $Result.GetResult<Prisma.$led_activityPayload, S>

  type led_activityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<led_activityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Led_activityCountAggregateInputType | true
    }

  export interface led_activityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['led_activity'], meta: { name: 'led_activity' } }
    /**
     * Find zero or one Led_activity that matches the filter.
     * @param {led_activityFindUniqueArgs} args - Arguments to find a Led_activity
     * @example
     * // Get one Led_activity
     * const led_activity = await prisma.led_activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends led_activityFindUniqueArgs>(args: SelectSubset<T, led_activityFindUniqueArgs<ExtArgs>>): Prisma__led_activityClient<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Led_activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {led_activityFindUniqueOrThrowArgs} args - Arguments to find a Led_activity
     * @example
     * // Get one Led_activity
     * const led_activity = await prisma.led_activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends led_activityFindUniqueOrThrowArgs>(args: SelectSubset<T, led_activityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__led_activityClient<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Led_activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {led_activityFindFirstArgs} args - Arguments to find a Led_activity
     * @example
     * // Get one Led_activity
     * const led_activity = await prisma.led_activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends led_activityFindFirstArgs>(args?: SelectSubset<T, led_activityFindFirstArgs<ExtArgs>>): Prisma__led_activityClient<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Led_activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {led_activityFindFirstOrThrowArgs} args - Arguments to find a Led_activity
     * @example
     * // Get one Led_activity
     * const led_activity = await prisma.led_activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends led_activityFindFirstOrThrowArgs>(args?: SelectSubset<T, led_activityFindFirstOrThrowArgs<ExtArgs>>): Prisma__led_activityClient<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Led_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {led_activityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Led_activities
     * const led_activities = await prisma.led_activity.findMany()
     * 
     * // Get first 10 Led_activities
     * const led_activities = await prisma.led_activity.findMany({ take: 10 })
     * 
     * // Only select the `led_activitiyid`
     * const led_activityWithLed_activitiyidOnly = await prisma.led_activity.findMany({ select: { led_activitiyid: true } })
     * 
     */
    findMany<T extends led_activityFindManyArgs>(args?: SelectSubset<T, led_activityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Led_activity.
     * @param {led_activityCreateArgs} args - Arguments to create a Led_activity.
     * @example
     * // Create one Led_activity
     * const Led_activity = await prisma.led_activity.create({
     *   data: {
     *     // ... data to create a Led_activity
     *   }
     * })
     * 
     */
    create<T extends led_activityCreateArgs>(args: SelectSubset<T, led_activityCreateArgs<ExtArgs>>): Prisma__led_activityClient<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Led_activities.
     * @param {led_activityCreateManyArgs} args - Arguments to create many Led_activities.
     * @example
     * // Create many Led_activities
     * const led_activity = await prisma.led_activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends led_activityCreateManyArgs>(args?: SelectSubset<T, led_activityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Led_activity.
     * @param {led_activityDeleteArgs} args - Arguments to delete one Led_activity.
     * @example
     * // Delete one Led_activity
     * const Led_activity = await prisma.led_activity.delete({
     *   where: {
     *     // ... filter to delete one Led_activity
     *   }
     * })
     * 
     */
    delete<T extends led_activityDeleteArgs>(args: SelectSubset<T, led_activityDeleteArgs<ExtArgs>>): Prisma__led_activityClient<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Led_activity.
     * @param {led_activityUpdateArgs} args - Arguments to update one Led_activity.
     * @example
     * // Update one Led_activity
     * const led_activity = await prisma.led_activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends led_activityUpdateArgs>(args: SelectSubset<T, led_activityUpdateArgs<ExtArgs>>): Prisma__led_activityClient<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Led_activities.
     * @param {led_activityDeleteManyArgs} args - Arguments to filter Led_activities to delete.
     * @example
     * // Delete a few Led_activities
     * const { count } = await prisma.led_activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends led_activityDeleteManyArgs>(args?: SelectSubset<T, led_activityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Led_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {led_activityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Led_activities
     * const led_activity = await prisma.led_activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends led_activityUpdateManyArgs>(args: SelectSubset<T, led_activityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Led_activity.
     * @param {led_activityUpsertArgs} args - Arguments to update or create a Led_activity.
     * @example
     * // Update or create a Led_activity
     * const led_activity = await prisma.led_activity.upsert({
     *   create: {
     *     // ... data to create a Led_activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Led_activity we want to update
     *   }
     * })
     */
    upsert<T extends led_activityUpsertArgs>(args: SelectSubset<T, led_activityUpsertArgs<ExtArgs>>): Prisma__led_activityClient<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Led_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {led_activityCountArgs} args - Arguments to filter Led_activities to count.
     * @example
     * // Count the number of Led_activities
     * const count = await prisma.led_activity.count({
     *   where: {
     *     // ... the filter for the Led_activities we want to count
     *   }
     * })
    **/
    count<T extends led_activityCountArgs>(
      args?: Subset<T, led_activityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Led_activityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Led_activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Led_activityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Led_activityAggregateArgs>(args: Subset<T, Led_activityAggregateArgs>): Prisma.PrismaPromise<GetLed_activityAggregateType<T>>

    /**
     * Group by Led_activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {led_activityGroupByArgs} args - Group by arguments.
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
      T extends led_activityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: led_activityGroupByArgs['orderBy'] }
        : { orderBy?: led_activityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, led_activityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLed_activityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the led_activity model
   */
  readonly fields: led_activityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for led_activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__led_activityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensors<T extends sensorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sensorsDefaultArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the led_activity model
   */
  interface led_activityFieldRefs {
    readonly led_activitiyid: FieldRef<"led_activity", 'Int'>
    readonly sensorid: FieldRef<"led_activity", 'Int'>
    readonly activated: FieldRef<"led_activity", 'Int'>
    readonly datetime: FieldRef<"led_activity", 'DateTime'>
    readonly isdeleted: FieldRef<"led_activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * led_activity findUnique
   */
  export type led_activityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * Filter, which led_activity to fetch.
     */
    where: led_activityWhereUniqueInput
  }

  /**
   * led_activity findUniqueOrThrow
   */
  export type led_activityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * Filter, which led_activity to fetch.
     */
    where: led_activityWhereUniqueInput
  }

  /**
   * led_activity findFirst
   */
  export type led_activityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * Filter, which led_activity to fetch.
     */
    where?: led_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of led_activities to fetch.
     */
    orderBy?: led_activityOrderByWithRelationInput | led_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for led_activities.
     */
    cursor?: led_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` led_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` led_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of led_activities.
     */
    distinct?: Led_activityScalarFieldEnum | Led_activityScalarFieldEnum[]
  }

  /**
   * led_activity findFirstOrThrow
   */
  export type led_activityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * Filter, which led_activity to fetch.
     */
    where?: led_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of led_activities to fetch.
     */
    orderBy?: led_activityOrderByWithRelationInput | led_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for led_activities.
     */
    cursor?: led_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` led_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` led_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of led_activities.
     */
    distinct?: Led_activityScalarFieldEnum | Led_activityScalarFieldEnum[]
  }

  /**
   * led_activity findMany
   */
  export type led_activityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * Filter, which led_activities to fetch.
     */
    where?: led_activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of led_activities to fetch.
     */
    orderBy?: led_activityOrderByWithRelationInput | led_activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing led_activities.
     */
    cursor?: led_activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` led_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` led_activities.
     */
    skip?: number
    distinct?: Led_activityScalarFieldEnum | Led_activityScalarFieldEnum[]
  }

  /**
   * led_activity create
   */
  export type led_activityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * The data needed to create a led_activity.
     */
    data: XOR<led_activityCreateInput, led_activityUncheckedCreateInput>
  }

  /**
   * led_activity createMany
   */
  export type led_activityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many led_activities.
     */
    data: led_activityCreateManyInput | led_activityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * led_activity update
   */
  export type led_activityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * The data needed to update a led_activity.
     */
    data: XOR<led_activityUpdateInput, led_activityUncheckedUpdateInput>
    /**
     * Choose, which led_activity to update.
     */
    where: led_activityWhereUniqueInput
  }

  /**
   * led_activity updateMany
   */
  export type led_activityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update led_activities.
     */
    data: XOR<led_activityUpdateManyMutationInput, led_activityUncheckedUpdateManyInput>
    /**
     * Filter which led_activities to update
     */
    where?: led_activityWhereInput
    /**
     * Limit how many led_activities to update.
     */
    limit?: number
  }

  /**
   * led_activity upsert
   */
  export type led_activityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * The filter to search for the led_activity to update in case it exists.
     */
    where: led_activityWhereUniqueInput
    /**
     * In case the led_activity found by the `where` argument doesn't exist, create a new led_activity with this data.
     */
    create: XOR<led_activityCreateInput, led_activityUncheckedCreateInput>
    /**
     * In case the led_activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<led_activityUpdateInput, led_activityUncheckedUpdateInput>
  }

  /**
   * led_activity delete
   */
  export type led_activityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    /**
     * Filter which led_activity to delete.
     */
    where: led_activityWhereUniqueInput
  }

  /**
   * led_activity deleteMany
   */
  export type led_activityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which led_activities to delete
     */
    where?: led_activityWhereInput
    /**
     * Limit how many led_activities to delete.
     */
    limit?: number
  }

  /**
   * led_activity without action
   */
  export type led_activityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
  }


  /**
   * Model sensors
   */

  export type AggregateSensors = {
    _count: SensorsCountAggregateOutputType | null
    _avg: SensorsAvgAggregateOutputType | null
    _sum: SensorsSumAggregateOutputType | null
    _min: SensorsMinAggregateOutputType | null
    _max: SensorsMaxAggregateOutputType | null
  }

  export type SensorsAvgAggregateOutputType = {
    sensorid: number | null
    deviceid: number | null
  }

  export type SensorsSumAggregateOutputType = {
    sensorid: number | null
    deviceid: number | null
  }

  export type SensorsMinAggregateOutputType = {
    sensorid: number | null
    deviceid: number | null
    sensor_name: string | null
    sensor_description: string | null
    isdeleted: Date | null
  }

  export type SensorsMaxAggregateOutputType = {
    sensorid: number | null
    deviceid: number | null
    sensor_name: string | null
    sensor_description: string | null
    isdeleted: Date | null
  }

  export type SensorsCountAggregateOutputType = {
    sensorid: number
    deviceid: number
    sensor_name: number
    sensor_description: number
    isdeleted: number
    _all: number
  }


  export type SensorsAvgAggregateInputType = {
    sensorid?: true
    deviceid?: true
  }

  export type SensorsSumAggregateInputType = {
    sensorid?: true
    deviceid?: true
  }

  export type SensorsMinAggregateInputType = {
    sensorid?: true
    deviceid?: true
    sensor_name?: true
    sensor_description?: true
    isdeleted?: true
  }

  export type SensorsMaxAggregateInputType = {
    sensorid?: true
    deviceid?: true
    sensor_name?: true
    sensor_description?: true
    isdeleted?: true
  }

  export type SensorsCountAggregateInputType = {
    sensorid?: true
    deviceid?: true
    sensor_name?: true
    sensor_description?: true
    isdeleted?: true
    _all?: true
  }

  export type SensorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sensors to aggregate.
     */
    where?: sensorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sensors to fetch.
     */
    orderBy?: sensorsOrderByWithRelationInput | sensorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sensorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sensors
    **/
    _count?: true | SensorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorsMaxAggregateInputType
  }

  export type GetSensorsAggregateType<T extends SensorsAggregateArgs> = {
        [P in keyof T & keyof AggregateSensors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensors[P]>
      : GetScalarType<T[P], AggregateSensors[P]>
  }




  export type sensorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sensorsWhereInput
    orderBy?: sensorsOrderByWithAggregationInput | sensorsOrderByWithAggregationInput[]
    by: SensorsScalarFieldEnum[] | SensorsScalarFieldEnum
    having?: sensorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorsCountAggregateInputType | true
    _avg?: SensorsAvgAggregateInputType
    _sum?: SensorsSumAggregateInputType
    _min?: SensorsMinAggregateInputType
    _max?: SensorsMaxAggregateInputType
  }

  export type SensorsGroupByOutputType = {
    sensorid: number
    deviceid: number | null
    sensor_name: string
    sensor_description: string | null
    isdeleted: Date | null
    _count: SensorsCountAggregateOutputType | null
    _avg: SensorsAvgAggregateOutputType | null
    _sum: SensorsSumAggregateOutputType | null
    _min: SensorsMinAggregateOutputType | null
    _max: SensorsMaxAggregateOutputType | null
  }

  type GetSensorsGroupByPayload<T extends sensorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorsGroupByOutputType[P]>
            : GetScalarType<T[P], SensorsGroupByOutputType[P]>
        }
      >
    >


  export type sensorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sensorid?: boolean
    deviceid?: boolean
    sensor_name?: boolean
    sensor_description?: boolean
    isdeleted?: boolean
    led_activity?: boolean | sensors$led_activityArgs<ExtArgs>
    device?: boolean | sensors$deviceArgs<ExtArgs>
    temperature_humidity?: boolean | sensors$temperature_humidityArgs<ExtArgs>
    _count?: boolean | SensorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensors"]>



  export type sensorsSelectScalar = {
    sensorid?: boolean
    deviceid?: boolean
    sensor_name?: boolean
    sensor_description?: boolean
    isdeleted?: boolean
  }

  export type sensorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sensorid" | "deviceid" | "sensor_name" | "sensor_description" | "isdeleted", ExtArgs["result"]["sensors"]>
  export type sensorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    led_activity?: boolean | sensors$led_activityArgs<ExtArgs>
    device?: boolean | sensors$deviceArgs<ExtArgs>
    temperature_humidity?: boolean | sensors$temperature_humidityArgs<ExtArgs>
    _count?: boolean | SensorsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sensorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sensors"
    objects: {
      led_activity: Prisma.$led_activityPayload<ExtArgs>[]
      device: Prisma.$devicePayload<ExtArgs> | null
      temperature_humidity: Prisma.$temperature_humidityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      sensorid: number
      deviceid: number | null
      sensor_name: string
      sensor_description: string | null
      isdeleted: Date | null
    }, ExtArgs["result"]["sensors"]>
    composites: {}
  }

  type sensorsGetPayload<S extends boolean | null | undefined | sensorsDefaultArgs> = $Result.GetResult<Prisma.$sensorsPayload, S>

  type sensorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sensorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorsCountAggregateInputType | true
    }

  export interface sensorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sensors'], meta: { name: 'sensors' } }
    /**
     * Find zero or one Sensors that matches the filter.
     * @param {sensorsFindUniqueArgs} args - Arguments to find a Sensors
     * @example
     * // Get one Sensors
     * const sensors = await prisma.sensors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sensorsFindUniqueArgs>(args: SelectSubset<T, sensorsFindUniqueArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sensors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sensorsFindUniqueOrThrowArgs} args - Arguments to find a Sensors
     * @example
     * // Get one Sensors
     * const sensors = await prisma.sensors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sensorsFindUniqueOrThrowArgs>(args: SelectSubset<T, sensorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sensorsFindFirstArgs} args - Arguments to find a Sensors
     * @example
     * // Get one Sensors
     * const sensors = await prisma.sensors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sensorsFindFirstArgs>(args?: SelectSubset<T, sensorsFindFirstArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sensorsFindFirstOrThrowArgs} args - Arguments to find a Sensors
     * @example
     * // Get one Sensors
     * const sensors = await prisma.sensors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sensorsFindFirstOrThrowArgs>(args?: SelectSubset<T, sensorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sensorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensors.findMany()
     * 
     * // Get first 10 Sensors
     * const sensors = await prisma.sensors.findMany({ take: 10 })
     * 
     * // Only select the `sensorid`
     * const sensorsWithSensoridOnly = await prisma.sensors.findMany({ select: { sensorid: true } })
     * 
     */
    findMany<T extends sensorsFindManyArgs>(args?: SelectSubset<T, sensorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sensors.
     * @param {sensorsCreateArgs} args - Arguments to create a Sensors.
     * @example
     * // Create one Sensors
     * const Sensors = await prisma.sensors.create({
     *   data: {
     *     // ... data to create a Sensors
     *   }
     * })
     * 
     */
    create<T extends sensorsCreateArgs>(args: SelectSubset<T, sensorsCreateArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sensors.
     * @param {sensorsCreateManyArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensors = await prisma.sensors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sensorsCreateManyArgs>(args?: SelectSubset<T, sensorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sensors.
     * @param {sensorsDeleteArgs} args - Arguments to delete one Sensors.
     * @example
     * // Delete one Sensors
     * const Sensors = await prisma.sensors.delete({
     *   where: {
     *     // ... filter to delete one Sensors
     *   }
     * })
     * 
     */
    delete<T extends sensorsDeleteArgs>(args: SelectSubset<T, sensorsDeleteArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sensors.
     * @param {sensorsUpdateArgs} args - Arguments to update one Sensors.
     * @example
     * // Update one Sensors
     * const sensors = await prisma.sensors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sensorsUpdateArgs>(args: SelectSubset<T, sensorsUpdateArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sensors.
     * @param {sensorsDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sensorsDeleteManyArgs>(args?: SelectSubset<T, sensorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sensorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensors = await prisma.sensors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sensorsUpdateManyArgs>(args: SelectSubset<T, sensorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sensors.
     * @param {sensorsUpsertArgs} args - Arguments to update or create a Sensors.
     * @example
     * // Update or create a Sensors
     * const sensors = await prisma.sensors.upsert({
     *   create: {
     *     // ... data to create a Sensors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensors we want to update
     *   }
     * })
     */
    upsert<T extends sensorsUpsertArgs>(args: SelectSubset<T, sensorsUpsertArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sensorsCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensors.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
    **/
    count<T extends sensorsCountArgs>(
      args?: Subset<T, sensorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorsAggregateArgs>(args: Subset<T, SensorsAggregateArgs>): Prisma.PrismaPromise<GetSensorsAggregateType<T>>

    /**
     * Group by Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sensorsGroupByArgs} args - Group by arguments.
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
      T extends sensorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sensorsGroupByArgs['orderBy'] }
        : { orderBy?: sensorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sensorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sensors model
   */
  readonly fields: sensorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sensors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sensorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    led_activity<T extends sensors$led_activityArgs<ExtArgs> = {}>(args?: Subset<T, sensors$led_activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$led_activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    device<T extends sensors$deviceArgs<ExtArgs> = {}>(args?: Subset<T, sensors$deviceArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    temperature_humidity<T extends sensors$temperature_humidityArgs<ExtArgs> = {}>(args?: Subset<T, sensors$temperature_humidityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sensors model
   */
  interface sensorsFieldRefs {
    readonly sensorid: FieldRef<"sensors", 'Int'>
    readonly deviceid: FieldRef<"sensors", 'Int'>
    readonly sensor_name: FieldRef<"sensors", 'String'>
    readonly sensor_description: FieldRef<"sensors", 'String'>
    readonly isdeleted: FieldRef<"sensors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sensors findUnique
   */
  export type sensorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * Filter, which sensors to fetch.
     */
    where: sensorsWhereUniqueInput
  }

  /**
   * sensors findUniqueOrThrow
   */
  export type sensorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * Filter, which sensors to fetch.
     */
    where: sensorsWhereUniqueInput
  }

  /**
   * sensors findFirst
   */
  export type sensorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * Filter, which sensors to fetch.
     */
    where?: sensorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sensors to fetch.
     */
    orderBy?: sensorsOrderByWithRelationInput | sensorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sensors.
     */
    cursor?: sensorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sensors.
     */
    distinct?: SensorsScalarFieldEnum | SensorsScalarFieldEnum[]
  }

  /**
   * sensors findFirstOrThrow
   */
  export type sensorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * Filter, which sensors to fetch.
     */
    where?: sensorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sensors to fetch.
     */
    orderBy?: sensorsOrderByWithRelationInput | sensorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sensors.
     */
    cursor?: sensorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sensors.
     */
    distinct?: SensorsScalarFieldEnum | SensorsScalarFieldEnum[]
  }

  /**
   * sensors findMany
   */
  export type sensorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * Filter, which sensors to fetch.
     */
    where?: sensorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sensors to fetch.
     */
    orderBy?: sensorsOrderByWithRelationInput | sensorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sensors.
     */
    cursor?: sensorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sensors.
     */
    skip?: number
    distinct?: SensorsScalarFieldEnum | SensorsScalarFieldEnum[]
  }

  /**
   * sensors create
   */
  export type sensorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * The data needed to create a sensors.
     */
    data: XOR<sensorsCreateInput, sensorsUncheckedCreateInput>
  }

  /**
   * sensors createMany
   */
  export type sensorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sensors.
     */
    data: sensorsCreateManyInput | sensorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sensors update
   */
  export type sensorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * The data needed to update a sensors.
     */
    data: XOR<sensorsUpdateInput, sensorsUncheckedUpdateInput>
    /**
     * Choose, which sensors to update.
     */
    where: sensorsWhereUniqueInput
  }

  /**
   * sensors updateMany
   */
  export type sensorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sensors.
     */
    data: XOR<sensorsUpdateManyMutationInput, sensorsUncheckedUpdateManyInput>
    /**
     * Filter which sensors to update
     */
    where?: sensorsWhereInput
    /**
     * Limit how many sensors to update.
     */
    limit?: number
  }

  /**
   * sensors upsert
   */
  export type sensorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * The filter to search for the sensors to update in case it exists.
     */
    where: sensorsWhereUniqueInput
    /**
     * In case the sensors found by the `where` argument doesn't exist, create a new sensors with this data.
     */
    create: XOR<sensorsCreateInput, sensorsUncheckedCreateInput>
    /**
     * In case the sensors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sensorsUpdateInput, sensorsUncheckedUpdateInput>
  }

  /**
   * sensors delete
   */
  export type sensorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    /**
     * Filter which sensors to delete.
     */
    where: sensorsWhereUniqueInput
  }

  /**
   * sensors deleteMany
   */
  export type sensorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sensors to delete
     */
    where?: sensorsWhereInput
    /**
     * Limit how many sensors to delete.
     */
    limit?: number
  }

  /**
   * sensors.led_activity
   */
  export type sensors$led_activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the led_activity
     */
    select?: led_activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the led_activity
     */
    omit?: led_activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: led_activityInclude<ExtArgs> | null
    where?: led_activityWhereInput
    orderBy?: led_activityOrderByWithRelationInput | led_activityOrderByWithRelationInput[]
    cursor?: led_activityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Led_activityScalarFieldEnum | Led_activityScalarFieldEnum[]
  }

  /**
   * sensors.device
   */
  export type sensors$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: deviceInclude<ExtArgs> | null
    where?: deviceWhereInput
  }

  /**
   * sensors.temperature_humidity
   */
  export type sensors$temperature_humidityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    where?: temperature_humidityWhereInput
    orderBy?: temperature_humidityOrderByWithRelationInput | temperature_humidityOrderByWithRelationInput[]
    cursor?: temperature_humidityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Temperature_humidityScalarFieldEnum | Temperature_humidityScalarFieldEnum[]
  }

  /**
   * sensors without action
   */
  export type sensorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
  }


  /**
   * Model temperature_humidity
   */

  export type AggregateTemperature_humidity = {
    _count: Temperature_humidityCountAggregateOutputType | null
    _avg: Temperature_humidityAvgAggregateOutputType | null
    _sum: Temperature_humiditySumAggregateOutputType | null
    _min: Temperature_humidityMinAggregateOutputType | null
    _max: Temperature_humidityMaxAggregateOutputType | null
  }

  export type Temperature_humidityAvgAggregateOutputType = {
    temperature_humidityid: number | null
    sensorid: number | null
    temperature: number | null
    humidity: number | null
  }

  export type Temperature_humiditySumAggregateOutputType = {
    temperature_humidityid: number | null
    sensorid: number | null
    temperature: number | null
    humidity: number | null
  }

  export type Temperature_humidityMinAggregateOutputType = {
    temperature_humidityid: number | null
    sensorid: number | null
    temperature: number | null
    humidity: number | null
    datetime: Date | null
    isdeleted: Date | null
  }

  export type Temperature_humidityMaxAggregateOutputType = {
    temperature_humidityid: number | null
    sensorid: number | null
    temperature: number | null
    humidity: number | null
    datetime: Date | null
    isdeleted: Date | null
  }

  export type Temperature_humidityCountAggregateOutputType = {
    temperature_humidityid: number
    sensorid: number
    temperature: number
    humidity: number
    datetime: number
    isdeleted: number
    _all: number
  }


  export type Temperature_humidityAvgAggregateInputType = {
    temperature_humidityid?: true
    sensorid?: true
    temperature?: true
    humidity?: true
  }

  export type Temperature_humiditySumAggregateInputType = {
    temperature_humidityid?: true
    sensorid?: true
    temperature?: true
    humidity?: true
  }

  export type Temperature_humidityMinAggregateInputType = {
    temperature_humidityid?: true
    sensorid?: true
    temperature?: true
    humidity?: true
    datetime?: true
    isdeleted?: true
  }

  export type Temperature_humidityMaxAggregateInputType = {
    temperature_humidityid?: true
    sensorid?: true
    temperature?: true
    humidity?: true
    datetime?: true
    isdeleted?: true
  }

  export type Temperature_humidityCountAggregateInputType = {
    temperature_humidityid?: true
    sensorid?: true
    temperature?: true
    humidity?: true
    datetime?: true
    isdeleted?: true
    _all?: true
  }

  export type Temperature_humidityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temperature_humidity to aggregate.
     */
    where?: temperature_humidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temperature_humidities to fetch.
     */
    orderBy?: temperature_humidityOrderByWithRelationInput | temperature_humidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: temperature_humidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temperature_humidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temperature_humidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned temperature_humidities
    **/
    _count?: true | Temperature_humidityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Temperature_humidityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Temperature_humiditySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Temperature_humidityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Temperature_humidityMaxAggregateInputType
  }

  export type GetTemperature_humidityAggregateType<T extends Temperature_humidityAggregateArgs> = {
        [P in keyof T & keyof AggregateTemperature_humidity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemperature_humidity[P]>
      : GetScalarType<T[P], AggregateTemperature_humidity[P]>
  }




  export type temperature_humidityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: temperature_humidityWhereInput
    orderBy?: temperature_humidityOrderByWithAggregationInput | temperature_humidityOrderByWithAggregationInput[]
    by: Temperature_humidityScalarFieldEnum[] | Temperature_humidityScalarFieldEnum
    having?: temperature_humidityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Temperature_humidityCountAggregateInputType | true
    _avg?: Temperature_humidityAvgAggregateInputType
    _sum?: Temperature_humiditySumAggregateInputType
    _min?: Temperature_humidityMinAggregateInputType
    _max?: Temperature_humidityMaxAggregateInputType
  }

  export type Temperature_humidityGroupByOutputType = {
    temperature_humidityid: number
    sensorid: number | null
    temperature: number | null
    humidity: number | null
    datetime: Date | null
    isdeleted: Date | null
    _count: Temperature_humidityCountAggregateOutputType | null
    _avg: Temperature_humidityAvgAggregateOutputType | null
    _sum: Temperature_humiditySumAggregateOutputType | null
    _min: Temperature_humidityMinAggregateOutputType | null
    _max: Temperature_humidityMaxAggregateOutputType | null
  }

  type GetTemperature_humidityGroupByPayload<T extends temperature_humidityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Temperature_humidityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Temperature_humidityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Temperature_humidityGroupByOutputType[P]>
            : GetScalarType<T[P], Temperature_humidityGroupByOutputType[P]>
        }
      >
    >


  export type temperature_humiditySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    temperature_humidityid?: boolean
    sensorid?: boolean
    temperature?: boolean
    humidity?: boolean
    datetime?: boolean
    isdeleted?: boolean
    sensors?: boolean | temperature_humidity$sensorsArgs<ExtArgs>
  }, ExtArgs["result"]["temperature_humidity"]>



  export type temperature_humiditySelectScalar = {
    temperature_humidityid?: boolean
    sensorid?: boolean
    temperature?: boolean
    humidity?: boolean
    datetime?: boolean
    isdeleted?: boolean
  }

  export type temperature_humidityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"temperature_humidityid" | "sensorid" | "temperature" | "humidity" | "datetime" | "isdeleted", ExtArgs["result"]["temperature_humidity"]>
  export type temperature_humidityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | temperature_humidity$sensorsArgs<ExtArgs>
  }

  export type $temperature_humidityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "temperature_humidity"
    objects: {
      sensors: Prisma.$sensorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      temperature_humidityid: number
      sensorid: number | null
      temperature: number | null
      humidity: number | null
      datetime: Date | null
      isdeleted: Date | null
    }, ExtArgs["result"]["temperature_humidity"]>
    composites: {}
  }

  type temperature_humidityGetPayload<S extends boolean | null | undefined | temperature_humidityDefaultArgs> = $Result.GetResult<Prisma.$temperature_humidityPayload, S>

  type temperature_humidityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<temperature_humidityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Temperature_humidityCountAggregateInputType | true
    }

  export interface temperature_humidityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['temperature_humidity'], meta: { name: 'temperature_humidity' } }
    /**
     * Find zero or one Temperature_humidity that matches the filter.
     * @param {temperature_humidityFindUniqueArgs} args - Arguments to find a Temperature_humidity
     * @example
     * // Get one Temperature_humidity
     * const temperature_humidity = await prisma.temperature_humidity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends temperature_humidityFindUniqueArgs>(args: SelectSubset<T, temperature_humidityFindUniqueArgs<ExtArgs>>): Prisma__temperature_humidityClient<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Temperature_humidity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {temperature_humidityFindUniqueOrThrowArgs} args - Arguments to find a Temperature_humidity
     * @example
     * // Get one Temperature_humidity
     * const temperature_humidity = await prisma.temperature_humidity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends temperature_humidityFindUniqueOrThrowArgs>(args: SelectSubset<T, temperature_humidityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__temperature_humidityClient<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temperature_humidity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temperature_humidityFindFirstArgs} args - Arguments to find a Temperature_humidity
     * @example
     * // Get one Temperature_humidity
     * const temperature_humidity = await prisma.temperature_humidity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends temperature_humidityFindFirstArgs>(args?: SelectSubset<T, temperature_humidityFindFirstArgs<ExtArgs>>): Prisma__temperature_humidityClient<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Temperature_humidity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temperature_humidityFindFirstOrThrowArgs} args - Arguments to find a Temperature_humidity
     * @example
     * // Get one Temperature_humidity
     * const temperature_humidity = await prisma.temperature_humidity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends temperature_humidityFindFirstOrThrowArgs>(args?: SelectSubset<T, temperature_humidityFindFirstOrThrowArgs<ExtArgs>>): Prisma__temperature_humidityClient<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Temperature_humidities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temperature_humidityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Temperature_humidities
     * const temperature_humidities = await prisma.temperature_humidity.findMany()
     * 
     * // Get first 10 Temperature_humidities
     * const temperature_humidities = await prisma.temperature_humidity.findMany({ take: 10 })
     * 
     * // Only select the `temperature_humidityid`
     * const temperature_humidityWithTemperature_humidityidOnly = await prisma.temperature_humidity.findMany({ select: { temperature_humidityid: true } })
     * 
     */
    findMany<T extends temperature_humidityFindManyArgs>(args?: SelectSubset<T, temperature_humidityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Temperature_humidity.
     * @param {temperature_humidityCreateArgs} args - Arguments to create a Temperature_humidity.
     * @example
     * // Create one Temperature_humidity
     * const Temperature_humidity = await prisma.temperature_humidity.create({
     *   data: {
     *     // ... data to create a Temperature_humidity
     *   }
     * })
     * 
     */
    create<T extends temperature_humidityCreateArgs>(args: SelectSubset<T, temperature_humidityCreateArgs<ExtArgs>>): Prisma__temperature_humidityClient<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Temperature_humidities.
     * @param {temperature_humidityCreateManyArgs} args - Arguments to create many Temperature_humidities.
     * @example
     * // Create many Temperature_humidities
     * const temperature_humidity = await prisma.temperature_humidity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends temperature_humidityCreateManyArgs>(args?: SelectSubset<T, temperature_humidityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Temperature_humidity.
     * @param {temperature_humidityDeleteArgs} args - Arguments to delete one Temperature_humidity.
     * @example
     * // Delete one Temperature_humidity
     * const Temperature_humidity = await prisma.temperature_humidity.delete({
     *   where: {
     *     // ... filter to delete one Temperature_humidity
     *   }
     * })
     * 
     */
    delete<T extends temperature_humidityDeleteArgs>(args: SelectSubset<T, temperature_humidityDeleteArgs<ExtArgs>>): Prisma__temperature_humidityClient<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Temperature_humidity.
     * @param {temperature_humidityUpdateArgs} args - Arguments to update one Temperature_humidity.
     * @example
     * // Update one Temperature_humidity
     * const temperature_humidity = await prisma.temperature_humidity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends temperature_humidityUpdateArgs>(args: SelectSubset<T, temperature_humidityUpdateArgs<ExtArgs>>): Prisma__temperature_humidityClient<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Temperature_humidities.
     * @param {temperature_humidityDeleteManyArgs} args - Arguments to filter Temperature_humidities to delete.
     * @example
     * // Delete a few Temperature_humidities
     * const { count } = await prisma.temperature_humidity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends temperature_humidityDeleteManyArgs>(args?: SelectSubset<T, temperature_humidityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Temperature_humidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temperature_humidityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Temperature_humidities
     * const temperature_humidity = await prisma.temperature_humidity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends temperature_humidityUpdateManyArgs>(args: SelectSubset<T, temperature_humidityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Temperature_humidity.
     * @param {temperature_humidityUpsertArgs} args - Arguments to update or create a Temperature_humidity.
     * @example
     * // Update or create a Temperature_humidity
     * const temperature_humidity = await prisma.temperature_humidity.upsert({
     *   create: {
     *     // ... data to create a Temperature_humidity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Temperature_humidity we want to update
     *   }
     * })
     */
    upsert<T extends temperature_humidityUpsertArgs>(args: SelectSubset<T, temperature_humidityUpsertArgs<ExtArgs>>): Prisma__temperature_humidityClient<$Result.GetResult<Prisma.$temperature_humidityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Temperature_humidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temperature_humidityCountArgs} args - Arguments to filter Temperature_humidities to count.
     * @example
     * // Count the number of Temperature_humidities
     * const count = await prisma.temperature_humidity.count({
     *   where: {
     *     // ... the filter for the Temperature_humidities we want to count
     *   }
     * })
    **/
    count<T extends temperature_humidityCountArgs>(
      args?: Subset<T, temperature_humidityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Temperature_humidityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Temperature_humidity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Temperature_humidityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Temperature_humidityAggregateArgs>(args: Subset<T, Temperature_humidityAggregateArgs>): Prisma.PrismaPromise<GetTemperature_humidityAggregateType<T>>

    /**
     * Group by Temperature_humidity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {temperature_humidityGroupByArgs} args - Group by arguments.
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
      T extends temperature_humidityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: temperature_humidityGroupByArgs['orderBy'] }
        : { orderBy?: temperature_humidityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, temperature_humidityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemperature_humidityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the temperature_humidity model
   */
  readonly fields: temperature_humidityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for temperature_humidity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__temperature_humidityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensors<T extends temperature_humidity$sensorsArgs<ExtArgs> = {}>(args?: Subset<T, temperature_humidity$sensorsArgs<ExtArgs>>): Prisma__sensorsClient<$Result.GetResult<Prisma.$sensorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the temperature_humidity model
   */
  interface temperature_humidityFieldRefs {
    readonly temperature_humidityid: FieldRef<"temperature_humidity", 'Int'>
    readonly sensorid: FieldRef<"temperature_humidity", 'Int'>
    readonly temperature: FieldRef<"temperature_humidity", 'Float'>
    readonly humidity: FieldRef<"temperature_humidity", 'Float'>
    readonly datetime: FieldRef<"temperature_humidity", 'DateTime'>
    readonly isdeleted: FieldRef<"temperature_humidity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * temperature_humidity findUnique
   */
  export type temperature_humidityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * Filter, which temperature_humidity to fetch.
     */
    where: temperature_humidityWhereUniqueInput
  }

  /**
   * temperature_humidity findUniqueOrThrow
   */
  export type temperature_humidityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * Filter, which temperature_humidity to fetch.
     */
    where: temperature_humidityWhereUniqueInput
  }

  /**
   * temperature_humidity findFirst
   */
  export type temperature_humidityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * Filter, which temperature_humidity to fetch.
     */
    where?: temperature_humidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temperature_humidities to fetch.
     */
    orderBy?: temperature_humidityOrderByWithRelationInput | temperature_humidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temperature_humidities.
     */
    cursor?: temperature_humidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temperature_humidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temperature_humidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temperature_humidities.
     */
    distinct?: Temperature_humidityScalarFieldEnum | Temperature_humidityScalarFieldEnum[]
  }

  /**
   * temperature_humidity findFirstOrThrow
   */
  export type temperature_humidityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * Filter, which temperature_humidity to fetch.
     */
    where?: temperature_humidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temperature_humidities to fetch.
     */
    orderBy?: temperature_humidityOrderByWithRelationInput | temperature_humidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for temperature_humidities.
     */
    cursor?: temperature_humidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temperature_humidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temperature_humidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of temperature_humidities.
     */
    distinct?: Temperature_humidityScalarFieldEnum | Temperature_humidityScalarFieldEnum[]
  }

  /**
   * temperature_humidity findMany
   */
  export type temperature_humidityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * Filter, which temperature_humidities to fetch.
     */
    where?: temperature_humidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of temperature_humidities to fetch.
     */
    orderBy?: temperature_humidityOrderByWithRelationInput | temperature_humidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing temperature_humidities.
     */
    cursor?: temperature_humidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` temperature_humidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` temperature_humidities.
     */
    skip?: number
    distinct?: Temperature_humidityScalarFieldEnum | Temperature_humidityScalarFieldEnum[]
  }

  /**
   * temperature_humidity create
   */
  export type temperature_humidityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * The data needed to create a temperature_humidity.
     */
    data?: XOR<temperature_humidityCreateInput, temperature_humidityUncheckedCreateInput>
  }

  /**
   * temperature_humidity createMany
   */
  export type temperature_humidityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many temperature_humidities.
     */
    data: temperature_humidityCreateManyInput | temperature_humidityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * temperature_humidity update
   */
  export type temperature_humidityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * The data needed to update a temperature_humidity.
     */
    data: XOR<temperature_humidityUpdateInput, temperature_humidityUncheckedUpdateInput>
    /**
     * Choose, which temperature_humidity to update.
     */
    where: temperature_humidityWhereUniqueInput
  }

  /**
   * temperature_humidity updateMany
   */
  export type temperature_humidityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update temperature_humidities.
     */
    data: XOR<temperature_humidityUpdateManyMutationInput, temperature_humidityUncheckedUpdateManyInput>
    /**
     * Filter which temperature_humidities to update
     */
    where?: temperature_humidityWhereInput
    /**
     * Limit how many temperature_humidities to update.
     */
    limit?: number
  }

  /**
   * temperature_humidity upsert
   */
  export type temperature_humidityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * The filter to search for the temperature_humidity to update in case it exists.
     */
    where: temperature_humidityWhereUniqueInput
    /**
     * In case the temperature_humidity found by the `where` argument doesn't exist, create a new temperature_humidity with this data.
     */
    create: XOR<temperature_humidityCreateInput, temperature_humidityUncheckedCreateInput>
    /**
     * In case the temperature_humidity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<temperature_humidityUpdateInput, temperature_humidityUncheckedUpdateInput>
  }

  /**
   * temperature_humidity delete
   */
  export type temperature_humidityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
    /**
     * Filter which temperature_humidity to delete.
     */
    where: temperature_humidityWhereUniqueInput
  }

  /**
   * temperature_humidity deleteMany
   */
  export type temperature_humidityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which temperature_humidities to delete
     */
    where?: temperature_humidityWhereInput
    /**
     * Limit how many temperature_humidities to delete.
     */
    limit?: number
  }

  /**
   * temperature_humidity.sensors
   */
  export type temperature_humidity$sensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sensors
     */
    select?: sensorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sensors
     */
    omit?: sensorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sensorsInclude<ExtArgs> | null
    where?: sensorsWhereInput
  }

  /**
   * temperature_humidity without action
   */
  export type temperature_humidityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the temperature_humidity
     */
    select?: temperature_humiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the temperature_humidity
     */
    omit?: temperature_humidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: temperature_humidityInclude<ExtArgs> | null
  }


  /**
   * Model login
   */

  export type AggregateLogin = {
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  export type LoginAvgAggregateOutputType = {
    userid: number | null
  }

  export type LoginSumAggregateOutputType = {
    userid: number | null
  }

  export type LoginMinAggregateOutputType = {
    userid: number | null
    username: string | null
    password: string | null
  }

  export type LoginMaxAggregateOutputType = {
    userid: number | null
    username: string | null
    password: string | null
  }

  export type LoginCountAggregateOutputType = {
    userid: number
    username: number
    password: number
    _all: number
  }


  export type LoginAvgAggregateInputType = {
    userid?: true
  }

  export type LoginSumAggregateInputType = {
    userid?: true
  }

  export type LoginMinAggregateInputType = {
    userid?: true
    username?: true
    password?: true
  }

  export type LoginMaxAggregateInputType = {
    userid?: true
    username?: true
    password?: true
  }

  export type LoginCountAggregateInputType = {
    userid?: true
    username?: true
    password?: true
    _all?: true
  }

  export type LoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which login to aggregate.
     */
    where?: loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logins
    **/
    _count?: true | LoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginMaxAggregateInputType
  }

  export type GetLoginAggregateType<T extends LoginAggregateArgs> = {
        [P in keyof T & keyof AggregateLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogin[P]>
      : GetScalarType<T[P], AggregateLogin[P]>
  }




  export type loginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loginWhereInput
    orderBy?: loginOrderByWithAggregationInput | loginOrderByWithAggregationInput[]
    by: LoginScalarFieldEnum[] | LoginScalarFieldEnum
    having?: loginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginCountAggregateInputType | true
    _avg?: LoginAvgAggregateInputType
    _sum?: LoginSumAggregateInputType
    _min?: LoginMinAggregateInputType
    _max?: LoginMaxAggregateInputType
  }

  export type LoginGroupByOutputType = {
    userid: number
    username: string
    password: string
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  type GetLoginGroupByPayload<T extends loginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginGroupByOutputType[P]>
            : GetScalarType<T[P], LoginGroupByOutputType[P]>
        }
      >
    >


  export type loginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["login"]>



  export type loginSelectScalar = {
    userid?: boolean
    username?: boolean
    password?: boolean
  }

  export type loginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "username" | "password", ExtArgs["result"]["login"]>

  export type $loginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "login"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userid: number
      username: string
      password: string
    }, ExtArgs["result"]["login"]>
    composites: {}
  }

  type loginGetPayload<S extends boolean | null | undefined | loginDefaultArgs> = $Result.GetResult<Prisma.$loginPayload, S>

  type loginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<loginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginCountAggregateInputType | true
    }

  export interface loginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['login'], meta: { name: 'login' } }
    /**
     * Find zero or one Login that matches the filter.
     * @param {loginFindUniqueArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends loginFindUniqueArgs>(args: SelectSubset<T, loginFindUniqueArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Login that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {loginFindUniqueOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends loginFindUniqueOrThrowArgs>(args: SelectSubset<T, loginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginFindFirstArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends loginFindFirstArgs>(args?: SelectSubset<T, loginFindFirstArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginFindFirstOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends loginFindFirstOrThrowArgs>(args?: SelectSubset<T, loginFindFirstOrThrowArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logins
     * const logins = await prisma.login.findMany()
     * 
     * // Get first 10 Logins
     * const logins = await prisma.login.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const loginWithUseridOnly = await prisma.login.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends loginFindManyArgs>(args?: SelectSubset<T, loginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Login.
     * @param {loginCreateArgs} args - Arguments to create a Login.
     * @example
     * // Create one Login
     * const Login = await prisma.login.create({
     *   data: {
     *     // ... data to create a Login
     *   }
     * })
     * 
     */
    create<T extends loginCreateArgs>(args: SelectSubset<T, loginCreateArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logins.
     * @param {loginCreateManyArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const login = await prisma.login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends loginCreateManyArgs>(args?: SelectSubset<T, loginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Login.
     * @param {loginDeleteArgs} args - Arguments to delete one Login.
     * @example
     * // Delete one Login
     * const Login = await prisma.login.delete({
     *   where: {
     *     // ... filter to delete one Login
     *   }
     * })
     * 
     */
    delete<T extends loginDeleteArgs>(args: SelectSubset<T, loginDeleteArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Login.
     * @param {loginUpdateArgs} args - Arguments to update one Login.
     * @example
     * // Update one Login
     * const login = await prisma.login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends loginUpdateArgs>(args: SelectSubset<T, loginUpdateArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logins.
     * @param {loginDeleteManyArgs} args - Arguments to filter Logins to delete.
     * @example
     * // Delete a few Logins
     * const { count } = await prisma.login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends loginDeleteManyArgs>(args?: SelectSubset<T, loginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logins
     * const login = await prisma.login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends loginUpdateManyArgs>(args: SelectSubset<T, loginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Login.
     * @param {loginUpsertArgs} args - Arguments to update or create a Login.
     * @example
     * // Update or create a Login
     * const login = await prisma.login.upsert({
     *   create: {
     *     // ... data to create a Login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Login we want to update
     *   }
     * })
     */
    upsert<T extends loginUpsertArgs>(args: SelectSubset<T, loginUpsertArgs<ExtArgs>>): Prisma__loginClient<$Result.GetResult<Prisma.$loginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginCountArgs} args - Arguments to filter Logins to count.
     * @example
     * // Count the number of Logins
     * const count = await prisma.login.count({
     *   where: {
     *     // ... the filter for the Logins we want to count
     *   }
     * })
    **/
    count<T extends loginCountArgs>(
      args?: Subset<T, loginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginAggregateArgs>(args: Subset<T, LoginAggregateArgs>): Prisma.PrismaPromise<GetLoginAggregateType<T>>

    /**
     * Group by Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginGroupByArgs} args - Group by arguments.
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
      T extends loginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loginGroupByArgs['orderBy'] }
        : { orderBy?: loginGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the login model
   */
  readonly fields: loginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the login model
   */
  interface loginFieldRefs {
    readonly userid: FieldRef<"login", 'Int'>
    readonly username: FieldRef<"login", 'String'>
    readonly password: FieldRef<"login", 'String'>
  }
    

  // Custom InputTypes
  /**
   * login findUnique
   */
  export type loginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Filter, which login to fetch.
     */
    where: loginWhereUniqueInput
  }

  /**
   * login findUniqueOrThrow
   */
  export type loginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Filter, which login to fetch.
     */
    where: loginWhereUniqueInput
  }

  /**
   * login findFirst
   */
  export type loginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Filter, which login to fetch.
     */
    where?: loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logins.
     */
    cursor?: loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * login findFirstOrThrow
   */
  export type loginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Filter, which login to fetch.
     */
    where?: loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logins.
     */
    cursor?: loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * login findMany
   */
  export type loginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where?: loginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginOrderByWithRelationInput | loginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logins.
     */
    cursor?: loginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * login create
   */
  export type loginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * The data needed to create a login.
     */
    data: XOR<loginCreateInput, loginUncheckedCreateInput>
  }

  /**
   * login createMany
   */
  export type loginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logins.
     */
    data: loginCreateManyInput | loginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * login update
   */
  export type loginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * The data needed to update a login.
     */
    data: XOR<loginUpdateInput, loginUncheckedUpdateInput>
    /**
     * Choose, which login to update.
     */
    where: loginWhereUniqueInput
  }

  /**
   * login updateMany
   */
  export type loginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logins.
     */
    data: XOR<loginUpdateManyMutationInput, loginUncheckedUpdateManyInput>
    /**
     * Filter which logins to update
     */
    where?: loginWhereInput
    /**
     * Limit how many logins to update.
     */
    limit?: number
  }

  /**
   * login upsert
   */
  export type loginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * The filter to search for the login to update in case it exists.
     */
    where: loginWhereUniqueInput
    /**
     * In case the login found by the `where` argument doesn't exist, create a new login with this data.
     */
    create: XOR<loginCreateInput, loginUncheckedCreateInput>
    /**
     * In case the login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loginUpdateInput, loginUncheckedUpdateInput>
  }

  /**
   * login delete
   */
  export type loginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
    /**
     * Filter which login to delete.
     */
    where: loginWhereUniqueInput
  }

  /**
   * login deleteMany
   */
  export type loginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logins to delete
     */
    where?: loginWhereInput
    /**
     * Limit how many logins to delete.
     */
    limit?: number
  }

  /**
   * login without action
   */
  export type loginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the login
     */
    select?: loginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the login
     */
    omit?: loginOmit<ExtArgs> | null
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


  export const DeviceScalarFieldEnum: {
    deviceid: 'deviceid',
    device_name: 'device_name',
    device_purpose: 'device_purpose',
    device_ip: 'device_ip',
    status: 'status',
    isdeleted: 'isdeleted'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const Led_activityScalarFieldEnum: {
    led_activitiyid: 'led_activitiyid',
    sensorid: 'sensorid',
    activated: 'activated',
    datetime: 'datetime',
    isdeleted: 'isdeleted'
  };

  export type Led_activityScalarFieldEnum = (typeof Led_activityScalarFieldEnum)[keyof typeof Led_activityScalarFieldEnum]


  export const SensorsScalarFieldEnum: {
    sensorid: 'sensorid',
    deviceid: 'deviceid',
    sensor_name: 'sensor_name',
    sensor_description: 'sensor_description',
    isdeleted: 'isdeleted'
  };

  export type SensorsScalarFieldEnum = (typeof SensorsScalarFieldEnum)[keyof typeof SensorsScalarFieldEnum]


  export const Temperature_humidityScalarFieldEnum: {
    temperature_humidityid: 'temperature_humidityid',
    sensorid: 'sensorid',
    temperature: 'temperature',
    humidity: 'humidity',
    datetime: 'datetime',
    isdeleted: 'isdeleted'
  };

  export type Temperature_humidityScalarFieldEnum = (typeof Temperature_humidityScalarFieldEnum)[keyof typeof Temperature_humidityScalarFieldEnum]


  export const LoginScalarFieldEnum: {
    userid: 'userid',
    username: 'username',
    password: 'password'
  };

  export type LoginScalarFieldEnum = (typeof LoginScalarFieldEnum)[keyof typeof LoginScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const deviceOrderByRelevanceFieldEnum: {
    device_name: 'device_name',
    device_purpose: 'device_purpose',
    device_ip: 'device_ip',
    status: 'status'
  };

  export type deviceOrderByRelevanceFieldEnum = (typeof deviceOrderByRelevanceFieldEnum)[keyof typeof deviceOrderByRelevanceFieldEnum]


  export const sensorsOrderByRelevanceFieldEnum: {
    sensor_name: 'sensor_name',
    sensor_description: 'sensor_description'
  };

  export type sensorsOrderByRelevanceFieldEnum = (typeof sensorsOrderByRelevanceFieldEnum)[keyof typeof sensorsOrderByRelevanceFieldEnum]


  export const loginOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type loginOrderByRelevanceFieldEnum = (typeof loginOrderByRelevanceFieldEnum)[keyof typeof loginOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type deviceWhereInput = {
    AND?: deviceWhereInput | deviceWhereInput[]
    OR?: deviceWhereInput[]
    NOT?: deviceWhereInput | deviceWhereInput[]
    deviceid?: IntFilter<"device"> | number
    device_name?: StringFilter<"device"> | string
    device_purpose?: StringNullableFilter<"device"> | string | null
    device_ip?: StringNullableFilter<"device"> | string | null
    status?: StringNullableFilter<"device"> | string | null
    isdeleted?: DateTimeNullableFilter<"device"> | Date | string | null
    sensors?: SensorsListRelationFilter
  }

  export type deviceOrderByWithRelationInput = {
    deviceid?: SortOrder
    device_name?: SortOrder
    device_purpose?: SortOrderInput | SortOrder
    device_ip?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    sensors?: sensorsOrderByRelationAggregateInput
    _relevance?: deviceOrderByRelevanceInput
  }

  export type deviceWhereUniqueInput = Prisma.AtLeast<{
    deviceid?: number
    AND?: deviceWhereInput | deviceWhereInput[]
    OR?: deviceWhereInput[]
    NOT?: deviceWhereInput | deviceWhereInput[]
    device_name?: StringFilter<"device"> | string
    device_purpose?: StringNullableFilter<"device"> | string | null
    device_ip?: StringNullableFilter<"device"> | string | null
    status?: StringNullableFilter<"device"> | string | null
    isdeleted?: DateTimeNullableFilter<"device"> | Date | string | null
    sensors?: SensorsListRelationFilter
  }, "deviceid">

  export type deviceOrderByWithAggregationInput = {
    deviceid?: SortOrder
    device_name?: SortOrder
    device_purpose?: SortOrderInput | SortOrder
    device_ip?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    _count?: deviceCountOrderByAggregateInput
    _avg?: deviceAvgOrderByAggregateInput
    _max?: deviceMaxOrderByAggregateInput
    _min?: deviceMinOrderByAggregateInput
    _sum?: deviceSumOrderByAggregateInput
  }

  export type deviceScalarWhereWithAggregatesInput = {
    AND?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[]
    OR?: deviceScalarWhereWithAggregatesInput[]
    NOT?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[]
    deviceid?: IntWithAggregatesFilter<"device"> | number
    device_name?: StringWithAggregatesFilter<"device"> | string
    device_purpose?: StringNullableWithAggregatesFilter<"device"> | string | null
    device_ip?: StringNullableWithAggregatesFilter<"device"> | string | null
    status?: StringNullableWithAggregatesFilter<"device"> | string | null
    isdeleted?: DateTimeNullableWithAggregatesFilter<"device"> | Date | string | null
  }

  export type led_activityWhereInput = {
    AND?: led_activityWhereInput | led_activityWhereInput[]
    OR?: led_activityWhereInput[]
    NOT?: led_activityWhereInput | led_activityWhereInput[]
    led_activitiyid?: IntFilter<"led_activity"> | number
    sensorid?: IntFilter<"led_activity"> | number
    activated?: IntNullableFilter<"led_activity"> | number | null
    datetime?: DateTimeNullableFilter<"led_activity"> | Date | string | null
    isdeleted?: DateTimeNullableFilter<"led_activity"> | Date | string | null
    sensors?: XOR<SensorsScalarRelationFilter, sensorsWhereInput>
  }

  export type led_activityOrderByWithRelationInput = {
    led_activitiyid?: SortOrder
    sensorid?: SortOrder
    activated?: SortOrderInput | SortOrder
    datetime?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    sensors?: sensorsOrderByWithRelationInput
  }

  export type led_activityWhereUniqueInput = Prisma.AtLeast<{
    led_activitiyid?: number
    AND?: led_activityWhereInput | led_activityWhereInput[]
    OR?: led_activityWhereInput[]
    NOT?: led_activityWhereInput | led_activityWhereInput[]
    sensorid?: IntFilter<"led_activity"> | number
    activated?: IntNullableFilter<"led_activity"> | number | null
    datetime?: DateTimeNullableFilter<"led_activity"> | Date | string | null
    isdeleted?: DateTimeNullableFilter<"led_activity"> | Date | string | null
    sensors?: XOR<SensorsScalarRelationFilter, sensorsWhereInput>
  }, "led_activitiyid">

  export type led_activityOrderByWithAggregationInput = {
    led_activitiyid?: SortOrder
    sensorid?: SortOrder
    activated?: SortOrderInput | SortOrder
    datetime?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    _count?: led_activityCountOrderByAggregateInput
    _avg?: led_activityAvgOrderByAggregateInput
    _max?: led_activityMaxOrderByAggregateInput
    _min?: led_activityMinOrderByAggregateInput
    _sum?: led_activitySumOrderByAggregateInput
  }

  export type led_activityScalarWhereWithAggregatesInput = {
    AND?: led_activityScalarWhereWithAggregatesInput | led_activityScalarWhereWithAggregatesInput[]
    OR?: led_activityScalarWhereWithAggregatesInput[]
    NOT?: led_activityScalarWhereWithAggregatesInput | led_activityScalarWhereWithAggregatesInput[]
    led_activitiyid?: IntWithAggregatesFilter<"led_activity"> | number
    sensorid?: IntWithAggregatesFilter<"led_activity"> | number
    activated?: IntNullableWithAggregatesFilter<"led_activity"> | number | null
    datetime?: DateTimeNullableWithAggregatesFilter<"led_activity"> | Date | string | null
    isdeleted?: DateTimeNullableWithAggregatesFilter<"led_activity"> | Date | string | null
  }

  export type sensorsWhereInput = {
    AND?: sensorsWhereInput | sensorsWhereInput[]
    OR?: sensorsWhereInput[]
    NOT?: sensorsWhereInput | sensorsWhereInput[]
    sensorid?: IntFilter<"sensors"> | number
    deviceid?: IntNullableFilter<"sensors"> | number | null
    sensor_name?: StringFilter<"sensors"> | string
    sensor_description?: StringNullableFilter<"sensors"> | string | null
    isdeleted?: DateTimeNullableFilter<"sensors"> | Date | string | null
    led_activity?: Led_activityListRelationFilter
    device?: XOR<DeviceNullableScalarRelationFilter, deviceWhereInput> | null
    temperature_humidity?: Temperature_humidityListRelationFilter
  }

  export type sensorsOrderByWithRelationInput = {
    sensorid?: SortOrder
    deviceid?: SortOrderInput | SortOrder
    sensor_name?: SortOrder
    sensor_description?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    led_activity?: led_activityOrderByRelationAggregateInput
    device?: deviceOrderByWithRelationInput
    temperature_humidity?: temperature_humidityOrderByRelationAggregateInput
    _relevance?: sensorsOrderByRelevanceInput
  }

  export type sensorsWhereUniqueInput = Prisma.AtLeast<{
    sensorid?: number
    AND?: sensorsWhereInput | sensorsWhereInput[]
    OR?: sensorsWhereInput[]
    NOT?: sensorsWhereInput | sensorsWhereInput[]
    deviceid?: IntNullableFilter<"sensors"> | number | null
    sensor_name?: StringFilter<"sensors"> | string
    sensor_description?: StringNullableFilter<"sensors"> | string | null
    isdeleted?: DateTimeNullableFilter<"sensors"> | Date | string | null
    led_activity?: Led_activityListRelationFilter
    device?: XOR<DeviceNullableScalarRelationFilter, deviceWhereInput> | null
    temperature_humidity?: Temperature_humidityListRelationFilter
  }, "sensorid">

  export type sensorsOrderByWithAggregationInput = {
    sensorid?: SortOrder
    deviceid?: SortOrderInput | SortOrder
    sensor_name?: SortOrder
    sensor_description?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    _count?: sensorsCountOrderByAggregateInput
    _avg?: sensorsAvgOrderByAggregateInput
    _max?: sensorsMaxOrderByAggregateInput
    _min?: sensorsMinOrderByAggregateInput
    _sum?: sensorsSumOrderByAggregateInput
  }

  export type sensorsScalarWhereWithAggregatesInput = {
    AND?: sensorsScalarWhereWithAggregatesInput | sensorsScalarWhereWithAggregatesInput[]
    OR?: sensorsScalarWhereWithAggregatesInput[]
    NOT?: sensorsScalarWhereWithAggregatesInput | sensorsScalarWhereWithAggregatesInput[]
    sensorid?: IntWithAggregatesFilter<"sensors"> | number
    deviceid?: IntNullableWithAggregatesFilter<"sensors"> | number | null
    sensor_name?: StringWithAggregatesFilter<"sensors"> | string
    sensor_description?: StringNullableWithAggregatesFilter<"sensors"> | string | null
    isdeleted?: DateTimeNullableWithAggregatesFilter<"sensors"> | Date | string | null
  }

  export type temperature_humidityWhereInput = {
    AND?: temperature_humidityWhereInput | temperature_humidityWhereInput[]
    OR?: temperature_humidityWhereInput[]
    NOT?: temperature_humidityWhereInput | temperature_humidityWhereInput[]
    temperature_humidityid?: IntFilter<"temperature_humidity"> | number
    sensorid?: IntNullableFilter<"temperature_humidity"> | number | null
    temperature?: FloatNullableFilter<"temperature_humidity"> | number | null
    humidity?: FloatNullableFilter<"temperature_humidity"> | number | null
    datetime?: DateTimeNullableFilter<"temperature_humidity"> | Date | string | null
    isdeleted?: DateTimeNullableFilter<"temperature_humidity"> | Date | string | null
    sensors?: XOR<SensorsNullableScalarRelationFilter, sensorsWhereInput> | null
  }

  export type temperature_humidityOrderByWithRelationInput = {
    temperature_humidityid?: SortOrder
    sensorid?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    humidity?: SortOrderInput | SortOrder
    datetime?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    sensors?: sensorsOrderByWithRelationInput
  }

  export type temperature_humidityWhereUniqueInput = Prisma.AtLeast<{
    temperature_humidityid?: number
    AND?: temperature_humidityWhereInput | temperature_humidityWhereInput[]
    OR?: temperature_humidityWhereInput[]
    NOT?: temperature_humidityWhereInput | temperature_humidityWhereInput[]
    sensorid?: IntNullableFilter<"temperature_humidity"> | number | null
    temperature?: FloatNullableFilter<"temperature_humidity"> | number | null
    humidity?: FloatNullableFilter<"temperature_humidity"> | number | null
    datetime?: DateTimeNullableFilter<"temperature_humidity"> | Date | string | null
    isdeleted?: DateTimeNullableFilter<"temperature_humidity"> | Date | string | null
    sensors?: XOR<SensorsNullableScalarRelationFilter, sensorsWhereInput> | null
  }, "temperature_humidityid">

  export type temperature_humidityOrderByWithAggregationInput = {
    temperature_humidityid?: SortOrder
    sensorid?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    humidity?: SortOrderInput | SortOrder
    datetime?: SortOrderInput | SortOrder
    isdeleted?: SortOrderInput | SortOrder
    _count?: temperature_humidityCountOrderByAggregateInput
    _avg?: temperature_humidityAvgOrderByAggregateInput
    _max?: temperature_humidityMaxOrderByAggregateInput
    _min?: temperature_humidityMinOrderByAggregateInput
    _sum?: temperature_humiditySumOrderByAggregateInput
  }

  export type temperature_humidityScalarWhereWithAggregatesInput = {
    AND?: temperature_humidityScalarWhereWithAggregatesInput | temperature_humidityScalarWhereWithAggregatesInput[]
    OR?: temperature_humidityScalarWhereWithAggregatesInput[]
    NOT?: temperature_humidityScalarWhereWithAggregatesInput | temperature_humidityScalarWhereWithAggregatesInput[]
    temperature_humidityid?: IntWithAggregatesFilter<"temperature_humidity"> | number
    sensorid?: IntNullableWithAggregatesFilter<"temperature_humidity"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"temperature_humidity"> | number | null
    humidity?: FloatNullableWithAggregatesFilter<"temperature_humidity"> | number | null
    datetime?: DateTimeNullableWithAggregatesFilter<"temperature_humidity"> | Date | string | null
    isdeleted?: DateTimeNullableWithAggregatesFilter<"temperature_humidity"> | Date | string | null
  }

  export type loginWhereInput = {
    AND?: loginWhereInput | loginWhereInput[]
    OR?: loginWhereInput[]
    NOT?: loginWhereInput | loginWhereInput[]
    userid?: IntFilter<"login"> | number
    username?: StringFilter<"login"> | string
    password?: StringFilter<"login"> | string
  }

  export type loginOrderByWithRelationInput = {
    userid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _relevance?: loginOrderByRelevanceInput
  }

  export type loginWhereUniqueInput = Prisma.AtLeast<{
    userid?: number
    AND?: loginWhereInput | loginWhereInput[]
    OR?: loginWhereInput[]
    NOT?: loginWhereInput | loginWhereInput[]
    username?: StringFilter<"login"> | string
    password?: StringFilter<"login"> | string
  }, "userid">

  export type loginOrderByWithAggregationInput = {
    userid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: loginCountOrderByAggregateInput
    _avg?: loginAvgOrderByAggregateInput
    _max?: loginMaxOrderByAggregateInput
    _min?: loginMinOrderByAggregateInput
    _sum?: loginSumOrderByAggregateInput
  }

  export type loginScalarWhereWithAggregatesInput = {
    AND?: loginScalarWhereWithAggregatesInput | loginScalarWhereWithAggregatesInput[]
    OR?: loginScalarWhereWithAggregatesInput[]
    NOT?: loginScalarWhereWithAggregatesInput | loginScalarWhereWithAggregatesInput[]
    userid?: IntWithAggregatesFilter<"login"> | number
    username?: StringWithAggregatesFilter<"login"> | string
    password?: StringWithAggregatesFilter<"login"> | string
  }

  export type deviceCreateInput = {
    device_name: string
    device_purpose?: string | null
    device_ip?: string | null
    status?: string | null
    isdeleted?: Date | string | null
    sensors?: sensorsCreateNestedManyWithoutDeviceInput
  }

  export type deviceUncheckedCreateInput = {
    deviceid?: number
    device_name: string
    device_purpose?: string | null
    device_ip?: string | null
    status?: string | null
    isdeleted?: Date | string | null
    sensors?: sensorsUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type deviceUpdateInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    device_purpose?: NullableStringFieldUpdateOperationsInput | string | null
    device_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sensors?: sensorsUpdateManyWithoutDeviceNestedInput
  }

  export type deviceUncheckedUpdateInput = {
    deviceid?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    device_purpose?: NullableStringFieldUpdateOperationsInput | string | null
    device_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sensors?: sensorsUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type deviceCreateManyInput = {
    deviceid?: number
    device_name: string
    device_purpose?: string | null
    device_ip?: string | null
    status?: string | null
    isdeleted?: Date | string | null
  }

  export type deviceUpdateManyMutationInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    device_purpose?: NullableStringFieldUpdateOperationsInput | string | null
    device_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deviceUncheckedUpdateManyInput = {
    deviceid?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    device_purpose?: NullableStringFieldUpdateOperationsInput | string | null
    device_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type led_activityCreateInput = {
    activated?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
    sensors: sensorsCreateNestedOneWithoutLed_activityInput
  }

  export type led_activityUncheckedCreateInput = {
    led_activitiyid?: number
    sensorid: number
    activated?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type led_activityUpdateInput = {
    activated?: NullableIntFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sensors?: sensorsUpdateOneRequiredWithoutLed_activityNestedInput
  }

  export type led_activityUncheckedUpdateInput = {
    led_activitiyid?: IntFieldUpdateOperationsInput | number
    sensorid?: IntFieldUpdateOperationsInput | number
    activated?: NullableIntFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type led_activityCreateManyInput = {
    led_activitiyid?: number
    sensorid: number
    activated?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type led_activityUpdateManyMutationInput = {
    activated?: NullableIntFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type led_activityUncheckedUpdateManyInput = {
    led_activitiyid?: IntFieldUpdateOperationsInput | number
    sensorid?: IntFieldUpdateOperationsInput | number
    activated?: NullableIntFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sensorsCreateInput = {
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
    led_activity?: led_activityCreateNestedManyWithoutSensorsInput
    device?: deviceCreateNestedOneWithoutSensorsInput
    temperature_humidity?: temperature_humidityCreateNestedManyWithoutSensorsInput
  }

  export type sensorsUncheckedCreateInput = {
    sensorid?: number
    deviceid?: number | null
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
    led_activity?: led_activityUncheckedCreateNestedManyWithoutSensorsInput
    temperature_humidity?: temperature_humidityUncheckedCreateNestedManyWithoutSensorsInput
  }

  export type sensorsUpdateInput = {
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    led_activity?: led_activityUpdateManyWithoutSensorsNestedInput
    device?: deviceUpdateOneWithoutSensorsNestedInput
    temperature_humidity?: temperature_humidityUpdateManyWithoutSensorsNestedInput
  }

  export type sensorsUncheckedUpdateInput = {
    sensorid?: IntFieldUpdateOperationsInput | number
    deviceid?: NullableIntFieldUpdateOperationsInput | number | null
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    led_activity?: led_activityUncheckedUpdateManyWithoutSensorsNestedInput
    temperature_humidity?: temperature_humidityUncheckedUpdateManyWithoutSensorsNestedInput
  }

  export type sensorsCreateManyInput = {
    sensorid?: number
    deviceid?: number | null
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
  }

  export type sensorsUpdateManyMutationInput = {
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sensorsUncheckedUpdateManyInput = {
    sensorid?: IntFieldUpdateOperationsInput | number
    deviceid?: NullableIntFieldUpdateOperationsInput | number | null
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type temperature_humidityCreateInput = {
    temperature?: number | null
    humidity?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
    sensors?: sensorsCreateNestedOneWithoutTemperature_humidityInput
  }

  export type temperature_humidityUncheckedCreateInput = {
    temperature_humidityid?: number
    sensorid?: number | null
    temperature?: number | null
    humidity?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type temperature_humidityUpdateInput = {
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sensors?: sensorsUpdateOneWithoutTemperature_humidityNestedInput
  }

  export type temperature_humidityUncheckedUpdateInput = {
    temperature_humidityid?: IntFieldUpdateOperationsInput | number
    sensorid?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type temperature_humidityCreateManyInput = {
    temperature_humidityid?: number
    sensorid?: number | null
    temperature?: number | null
    humidity?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type temperature_humidityUpdateManyMutationInput = {
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type temperature_humidityUncheckedUpdateManyInput = {
    temperature_humidityid?: IntFieldUpdateOperationsInput | number
    sensorid?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type loginCreateInput = {
    username: string
    password: string
  }

  export type loginUncheckedCreateInput = {
    userid?: number
    username: string
    password: string
  }

  export type loginUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type loginUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type loginCreateManyInput = {
    userid?: number
    username: string
    password: string
  }

  export type loginUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type loginUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SensorsListRelationFilter = {
    every?: sensorsWhereInput
    some?: sensorsWhereInput
    none?: sensorsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sensorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type deviceOrderByRelevanceInput = {
    fields: deviceOrderByRelevanceFieldEnum | deviceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type deviceCountOrderByAggregateInput = {
    deviceid?: SortOrder
    device_name?: SortOrder
    device_purpose?: SortOrder
    device_ip?: SortOrder
    status?: SortOrder
    isdeleted?: SortOrder
  }

  export type deviceAvgOrderByAggregateInput = {
    deviceid?: SortOrder
  }

  export type deviceMaxOrderByAggregateInput = {
    deviceid?: SortOrder
    device_name?: SortOrder
    device_purpose?: SortOrder
    device_ip?: SortOrder
    status?: SortOrder
    isdeleted?: SortOrder
  }

  export type deviceMinOrderByAggregateInput = {
    deviceid?: SortOrder
    device_name?: SortOrder
    device_purpose?: SortOrder
    device_ip?: SortOrder
    status?: SortOrder
    isdeleted?: SortOrder
  }

  export type deviceSumOrderByAggregateInput = {
    deviceid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SensorsScalarRelationFilter = {
    is?: sensorsWhereInput
    isNot?: sensorsWhereInput
  }

  export type led_activityCountOrderByAggregateInput = {
    led_activitiyid?: SortOrder
    sensorid?: SortOrder
    activated?: SortOrder
    datetime?: SortOrder
    isdeleted?: SortOrder
  }

  export type led_activityAvgOrderByAggregateInput = {
    led_activitiyid?: SortOrder
    sensorid?: SortOrder
    activated?: SortOrder
  }

  export type led_activityMaxOrderByAggregateInput = {
    led_activitiyid?: SortOrder
    sensorid?: SortOrder
    activated?: SortOrder
    datetime?: SortOrder
    isdeleted?: SortOrder
  }

  export type led_activityMinOrderByAggregateInput = {
    led_activitiyid?: SortOrder
    sensorid?: SortOrder
    activated?: SortOrder
    datetime?: SortOrder
    isdeleted?: SortOrder
  }

  export type led_activitySumOrderByAggregateInput = {
    led_activitiyid?: SortOrder
    sensorid?: SortOrder
    activated?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Led_activityListRelationFilter = {
    every?: led_activityWhereInput
    some?: led_activityWhereInput
    none?: led_activityWhereInput
  }

  export type DeviceNullableScalarRelationFilter = {
    is?: deviceWhereInput | null
    isNot?: deviceWhereInput | null
  }

  export type Temperature_humidityListRelationFilter = {
    every?: temperature_humidityWhereInput
    some?: temperature_humidityWhereInput
    none?: temperature_humidityWhereInput
  }

  export type led_activityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type temperature_humidityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sensorsOrderByRelevanceInput = {
    fields: sensorsOrderByRelevanceFieldEnum | sensorsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sensorsCountOrderByAggregateInput = {
    sensorid?: SortOrder
    deviceid?: SortOrder
    sensor_name?: SortOrder
    sensor_description?: SortOrder
    isdeleted?: SortOrder
  }

  export type sensorsAvgOrderByAggregateInput = {
    sensorid?: SortOrder
    deviceid?: SortOrder
  }

  export type sensorsMaxOrderByAggregateInput = {
    sensorid?: SortOrder
    deviceid?: SortOrder
    sensor_name?: SortOrder
    sensor_description?: SortOrder
    isdeleted?: SortOrder
  }

  export type sensorsMinOrderByAggregateInput = {
    sensorid?: SortOrder
    deviceid?: SortOrder
    sensor_name?: SortOrder
    sensor_description?: SortOrder
    isdeleted?: SortOrder
  }

  export type sensorsSumOrderByAggregateInput = {
    sensorid?: SortOrder
    deviceid?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SensorsNullableScalarRelationFilter = {
    is?: sensorsWhereInput | null
    isNot?: sensorsWhereInput | null
  }

  export type temperature_humidityCountOrderByAggregateInput = {
    temperature_humidityid?: SortOrder
    sensorid?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    datetime?: SortOrder
    isdeleted?: SortOrder
  }

  export type temperature_humidityAvgOrderByAggregateInput = {
    temperature_humidityid?: SortOrder
    sensorid?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
  }

  export type temperature_humidityMaxOrderByAggregateInput = {
    temperature_humidityid?: SortOrder
    sensorid?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    datetime?: SortOrder
    isdeleted?: SortOrder
  }

  export type temperature_humidityMinOrderByAggregateInput = {
    temperature_humidityid?: SortOrder
    sensorid?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    datetime?: SortOrder
    isdeleted?: SortOrder
  }

  export type temperature_humiditySumOrderByAggregateInput = {
    temperature_humidityid?: SortOrder
    sensorid?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type loginOrderByRelevanceInput = {
    fields: loginOrderByRelevanceFieldEnum | loginOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type loginCountOrderByAggregateInput = {
    userid?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type loginAvgOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type loginMaxOrderByAggregateInput = {
    userid?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type loginMinOrderByAggregateInput = {
    userid?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type loginSumOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type sensorsCreateNestedManyWithoutDeviceInput = {
    create?: XOR<sensorsCreateWithoutDeviceInput, sensorsUncheckedCreateWithoutDeviceInput> | sensorsCreateWithoutDeviceInput[] | sensorsUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: sensorsCreateOrConnectWithoutDeviceInput | sensorsCreateOrConnectWithoutDeviceInput[]
    createMany?: sensorsCreateManyDeviceInputEnvelope
    connect?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
  }

  export type sensorsUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<sensorsCreateWithoutDeviceInput, sensorsUncheckedCreateWithoutDeviceInput> | sensorsCreateWithoutDeviceInput[] | sensorsUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: sensorsCreateOrConnectWithoutDeviceInput | sensorsCreateOrConnectWithoutDeviceInput[]
    createMany?: sensorsCreateManyDeviceInputEnvelope
    connect?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type sensorsUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<sensorsCreateWithoutDeviceInput, sensorsUncheckedCreateWithoutDeviceInput> | sensorsCreateWithoutDeviceInput[] | sensorsUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: sensorsCreateOrConnectWithoutDeviceInput | sensorsCreateOrConnectWithoutDeviceInput[]
    upsert?: sensorsUpsertWithWhereUniqueWithoutDeviceInput | sensorsUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: sensorsCreateManyDeviceInputEnvelope
    set?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
    disconnect?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
    delete?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
    connect?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
    update?: sensorsUpdateWithWhereUniqueWithoutDeviceInput | sensorsUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: sensorsUpdateManyWithWhereWithoutDeviceInput | sensorsUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: sensorsScalarWhereInput | sensorsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sensorsUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<sensorsCreateWithoutDeviceInput, sensorsUncheckedCreateWithoutDeviceInput> | sensorsCreateWithoutDeviceInput[] | sensorsUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: sensorsCreateOrConnectWithoutDeviceInput | sensorsCreateOrConnectWithoutDeviceInput[]
    upsert?: sensorsUpsertWithWhereUniqueWithoutDeviceInput | sensorsUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: sensorsCreateManyDeviceInputEnvelope
    set?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
    disconnect?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
    delete?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
    connect?: sensorsWhereUniqueInput | sensorsWhereUniqueInput[]
    update?: sensorsUpdateWithWhereUniqueWithoutDeviceInput | sensorsUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: sensorsUpdateManyWithWhereWithoutDeviceInput | sensorsUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: sensorsScalarWhereInput | sensorsScalarWhereInput[]
  }

  export type sensorsCreateNestedOneWithoutLed_activityInput = {
    create?: XOR<sensorsCreateWithoutLed_activityInput, sensorsUncheckedCreateWithoutLed_activityInput>
    connectOrCreate?: sensorsCreateOrConnectWithoutLed_activityInput
    connect?: sensorsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sensorsUpdateOneRequiredWithoutLed_activityNestedInput = {
    create?: XOR<sensorsCreateWithoutLed_activityInput, sensorsUncheckedCreateWithoutLed_activityInput>
    connectOrCreate?: sensorsCreateOrConnectWithoutLed_activityInput
    upsert?: sensorsUpsertWithoutLed_activityInput
    connect?: sensorsWhereUniqueInput
    update?: XOR<XOR<sensorsUpdateToOneWithWhereWithoutLed_activityInput, sensorsUpdateWithoutLed_activityInput>, sensorsUncheckedUpdateWithoutLed_activityInput>
  }

  export type led_activityCreateNestedManyWithoutSensorsInput = {
    create?: XOR<led_activityCreateWithoutSensorsInput, led_activityUncheckedCreateWithoutSensorsInput> | led_activityCreateWithoutSensorsInput[] | led_activityUncheckedCreateWithoutSensorsInput[]
    connectOrCreate?: led_activityCreateOrConnectWithoutSensorsInput | led_activityCreateOrConnectWithoutSensorsInput[]
    createMany?: led_activityCreateManySensorsInputEnvelope
    connect?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
  }

  export type deviceCreateNestedOneWithoutSensorsInput = {
    create?: XOR<deviceCreateWithoutSensorsInput, deviceUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: deviceCreateOrConnectWithoutSensorsInput
    connect?: deviceWhereUniqueInput
  }

  export type temperature_humidityCreateNestedManyWithoutSensorsInput = {
    create?: XOR<temperature_humidityCreateWithoutSensorsInput, temperature_humidityUncheckedCreateWithoutSensorsInput> | temperature_humidityCreateWithoutSensorsInput[] | temperature_humidityUncheckedCreateWithoutSensorsInput[]
    connectOrCreate?: temperature_humidityCreateOrConnectWithoutSensorsInput | temperature_humidityCreateOrConnectWithoutSensorsInput[]
    createMany?: temperature_humidityCreateManySensorsInputEnvelope
    connect?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
  }

  export type led_activityUncheckedCreateNestedManyWithoutSensorsInput = {
    create?: XOR<led_activityCreateWithoutSensorsInput, led_activityUncheckedCreateWithoutSensorsInput> | led_activityCreateWithoutSensorsInput[] | led_activityUncheckedCreateWithoutSensorsInput[]
    connectOrCreate?: led_activityCreateOrConnectWithoutSensorsInput | led_activityCreateOrConnectWithoutSensorsInput[]
    createMany?: led_activityCreateManySensorsInputEnvelope
    connect?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
  }

  export type temperature_humidityUncheckedCreateNestedManyWithoutSensorsInput = {
    create?: XOR<temperature_humidityCreateWithoutSensorsInput, temperature_humidityUncheckedCreateWithoutSensorsInput> | temperature_humidityCreateWithoutSensorsInput[] | temperature_humidityUncheckedCreateWithoutSensorsInput[]
    connectOrCreate?: temperature_humidityCreateOrConnectWithoutSensorsInput | temperature_humidityCreateOrConnectWithoutSensorsInput[]
    createMany?: temperature_humidityCreateManySensorsInputEnvelope
    connect?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
  }

  export type led_activityUpdateManyWithoutSensorsNestedInput = {
    create?: XOR<led_activityCreateWithoutSensorsInput, led_activityUncheckedCreateWithoutSensorsInput> | led_activityCreateWithoutSensorsInput[] | led_activityUncheckedCreateWithoutSensorsInput[]
    connectOrCreate?: led_activityCreateOrConnectWithoutSensorsInput | led_activityCreateOrConnectWithoutSensorsInput[]
    upsert?: led_activityUpsertWithWhereUniqueWithoutSensorsInput | led_activityUpsertWithWhereUniqueWithoutSensorsInput[]
    createMany?: led_activityCreateManySensorsInputEnvelope
    set?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
    disconnect?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
    delete?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
    connect?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
    update?: led_activityUpdateWithWhereUniqueWithoutSensorsInput | led_activityUpdateWithWhereUniqueWithoutSensorsInput[]
    updateMany?: led_activityUpdateManyWithWhereWithoutSensorsInput | led_activityUpdateManyWithWhereWithoutSensorsInput[]
    deleteMany?: led_activityScalarWhereInput | led_activityScalarWhereInput[]
  }

  export type deviceUpdateOneWithoutSensorsNestedInput = {
    create?: XOR<deviceCreateWithoutSensorsInput, deviceUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: deviceCreateOrConnectWithoutSensorsInput
    upsert?: deviceUpsertWithoutSensorsInput
    disconnect?: deviceWhereInput | boolean
    delete?: deviceWhereInput | boolean
    connect?: deviceWhereUniqueInput
    update?: XOR<XOR<deviceUpdateToOneWithWhereWithoutSensorsInput, deviceUpdateWithoutSensorsInput>, deviceUncheckedUpdateWithoutSensorsInput>
  }

  export type temperature_humidityUpdateManyWithoutSensorsNestedInput = {
    create?: XOR<temperature_humidityCreateWithoutSensorsInput, temperature_humidityUncheckedCreateWithoutSensorsInput> | temperature_humidityCreateWithoutSensorsInput[] | temperature_humidityUncheckedCreateWithoutSensorsInput[]
    connectOrCreate?: temperature_humidityCreateOrConnectWithoutSensorsInput | temperature_humidityCreateOrConnectWithoutSensorsInput[]
    upsert?: temperature_humidityUpsertWithWhereUniqueWithoutSensorsInput | temperature_humidityUpsertWithWhereUniqueWithoutSensorsInput[]
    createMany?: temperature_humidityCreateManySensorsInputEnvelope
    set?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
    disconnect?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
    delete?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
    connect?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
    update?: temperature_humidityUpdateWithWhereUniqueWithoutSensorsInput | temperature_humidityUpdateWithWhereUniqueWithoutSensorsInput[]
    updateMany?: temperature_humidityUpdateManyWithWhereWithoutSensorsInput | temperature_humidityUpdateManyWithWhereWithoutSensorsInput[]
    deleteMany?: temperature_humidityScalarWhereInput | temperature_humidityScalarWhereInput[]
  }

  export type led_activityUncheckedUpdateManyWithoutSensorsNestedInput = {
    create?: XOR<led_activityCreateWithoutSensorsInput, led_activityUncheckedCreateWithoutSensorsInput> | led_activityCreateWithoutSensorsInput[] | led_activityUncheckedCreateWithoutSensorsInput[]
    connectOrCreate?: led_activityCreateOrConnectWithoutSensorsInput | led_activityCreateOrConnectWithoutSensorsInput[]
    upsert?: led_activityUpsertWithWhereUniqueWithoutSensorsInput | led_activityUpsertWithWhereUniqueWithoutSensorsInput[]
    createMany?: led_activityCreateManySensorsInputEnvelope
    set?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
    disconnect?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
    delete?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
    connect?: led_activityWhereUniqueInput | led_activityWhereUniqueInput[]
    update?: led_activityUpdateWithWhereUniqueWithoutSensorsInput | led_activityUpdateWithWhereUniqueWithoutSensorsInput[]
    updateMany?: led_activityUpdateManyWithWhereWithoutSensorsInput | led_activityUpdateManyWithWhereWithoutSensorsInput[]
    deleteMany?: led_activityScalarWhereInput | led_activityScalarWhereInput[]
  }

  export type temperature_humidityUncheckedUpdateManyWithoutSensorsNestedInput = {
    create?: XOR<temperature_humidityCreateWithoutSensorsInput, temperature_humidityUncheckedCreateWithoutSensorsInput> | temperature_humidityCreateWithoutSensorsInput[] | temperature_humidityUncheckedCreateWithoutSensorsInput[]
    connectOrCreate?: temperature_humidityCreateOrConnectWithoutSensorsInput | temperature_humidityCreateOrConnectWithoutSensorsInput[]
    upsert?: temperature_humidityUpsertWithWhereUniqueWithoutSensorsInput | temperature_humidityUpsertWithWhereUniqueWithoutSensorsInput[]
    createMany?: temperature_humidityCreateManySensorsInputEnvelope
    set?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
    disconnect?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
    delete?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
    connect?: temperature_humidityWhereUniqueInput | temperature_humidityWhereUniqueInput[]
    update?: temperature_humidityUpdateWithWhereUniqueWithoutSensorsInput | temperature_humidityUpdateWithWhereUniqueWithoutSensorsInput[]
    updateMany?: temperature_humidityUpdateManyWithWhereWithoutSensorsInput | temperature_humidityUpdateManyWithWhereWithoutSensorsInput[]
    deleteMany?: temperature_humidityScalarWhereInput | temperature_humidityScalarWhereInput[]
  }

  export type sensorsCreateNestedOneWithoutTemperature_humidityInput = {
    create?: XOR<sensorsCreateWithoutTemperature_humidityInput, sensorsUncheckedCreateWithoutTemperature_humidityInput>
    connectOrCreate?: sensorsCreateOrConnectWithoutTemperature_humidityInput
    connect?: sensorsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sensorsUpdateOneWithoutTemperature_humidityNestedInput = {
    create?: XOR<sensorsCreateWithoutTemperature_humidityInput, sensorsUncheckedCreateWithoutTemperature_humidityInput>
    connectOrCreate?: sensorsCreateOrConnectWithoutTemperature_humidityInput
    upsert?: sensorsUpsertWithoutTemperature_humidityInput
    disconnect?: sensorsWhereInput | boolean
    delete?: sensorsWhereInput | boolean
    connect?: sensorsWhereUniqueInput
    update?: XOR<XOR<sensorsUpdateToOneWithWhereWithoutTemperature_humidityInput, sensorsUpdateWithoutTemperature_humidityInput>, sensorsUncheckedUpdateWithoutTemperature_humidityInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type sensorsCreateWithoutDeviceInput = {
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
    led_activity?: led_activityCreateNestedManyWithoutSensorsInput
    temperature_humidity?: temperature_humidityCreateNestedManyWithoutSensorsInput
  }

  export type sensorsUncheckedCreateWithoutDeviceInput = {
    sensorid?: number
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
    led_activity?: led_activityUncheckedCreateNestedManyWithoutSensorsInput
    temperature_humidity?: temperature_humidityUncheckedCreateNestedManyWithoutSensorsInput
  }

  export type sensorsCreateOrConnectWithoutDeviceInput = {
    where: sensorsWhereUniqueInput
    create: XOR<sensorsCreateWithoutDeviceInput, sensorsUncheckedCreateWithoutDeviceInput>
  }

  export type sensorsCreateManyDeviceInputEnvelope = {
    data: sensorsCreateManyDeviceInput | sensorsCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type sensorsUpsertWithWhereUniqueWithoutDeviceInput = {
    where: sensorsWhereUniqueInput
    update: XOR<sensorsUpdateWithoutDeviceInput, sensorsUncheckedUpdateWithoutDeviceInput>
    create: XOR<sensorsCreateWithoutDeviceInput, sensorsUncheckedCreateWithoutDeviceInput>
  }

  export type sensorsUpdateWithWhereUniqueWithoutDeviceInput = {
    where: sensorsWhereUniqueInput
    data: XOR<sensorsUpdateWithoutDeviceInput, sensorsUncheckedUpdateWithoutDeviceInput>
  }

  export type sensorsUpdateManyWithWhereWithoutDeviceInput = {
    where: sensorsScalarWhereInput
    data: XOR<sensorsUpdateManyMutationInput, sensorsUncheckedUpdateManyWithoutDeviceInput>
  }

  export type sensorsScalarWhereInput = {
    AND?: sensorsScalarWhereInput | sensorsScalarWhereInput[]
    OR?: sensorsScalarWhereInput[]
    NOT?: sensorsScalarWhereInput | sensorsScalarWhereInput[]
    sensorid?: IntFilter<"sensors"> | number
    deviceid?: IntNullableFilter<"sensors"> | number | null
    sensor_name?: StringFilter<"sensors"> | string
    sensor_description?: StringNullableFilter<"sensors"> | string | null
    isdeleted?: DateTimeNullableFilter<"sensors"> | Date | string | null
  }

  export type sensorsCreateWithoutLed_activityInput = {
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
    device?: deviceCreateNestedOneWithoutSensorsInput
    temperature_humidity?: temperature_humidityCreateNestedManyWithoutSensorsInput
  }

  export type sensorsUncheckedCreateWithoutLed_activityInput = {
    sensorid?: number
    deviceid?: number | null
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
    temperature_humidity?: temperature_humidityUncheckedCreateNestedManyWithoutSensorsInput
  }

  export type sensorsCreateOrConnectWithoutLed_activityInput = {
    where: sensorsWhereUniqueInput
    create: XOR<sensorsCreateWithoutLed_activityInput, sensorsUncheckedCreateWithoutLed_activityInput>
  }

  export type sensorsUpsertWithoutLed_activityInput = {
    update: XOR<sensorsUpdateWithoutLed_activityInput, sensorsUncheckedUpdateWithoutLed_activityInput>
    create: XOR<sensorsCreateWithoutLed_activityInput, sensorsUncheckedCreateWithoutLed_activityInput>
    where?: sensorsWhereInput
  }

  export type sensorsUpdateToOneWithWhereWithoutLed_activityInput = {
    where?: sensorsWhereInput
    data: XOR<sensorsUpdateWithoutLed_activityInput, sensorsUncheckedUpdateWithoutLed_activityInput>
  }

  export type sensorsUpdateWithoutLed_activityInput = {
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: deviceUpdateOneWithoutSensorsNestedInput
    temperature_humidity?: temperature_humidityUpdateManyWithoutSensorsNestedInput
  }

  export type sensorsUncheckedUpdateWithoutLed_activityInput = {
    sensorid?: IntFieldUpdateOperationsInput | number
    deviceid?: NullableIntFieldUpdateOperationsInput | number | null
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    temperature_humidity?: temperature_humidityUncheckedUpdateManyWithoutSensorsNestedInput
  }

  export type led_activityCreateWithoutSensorsInput = {
    activated?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type led_activityUncheckedCreateWithoutSensorsInput = {
    led_activitiyid?: number
    activated?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type led_activityCreateOrConnectWithoutSensorsInput = {
    where: led_activityWhereUniqueInput
    create: XOR<led_activityCreateWithoutSensorsInput, led_activityUncheckedCreateWithoutSensorsInput>
  }

  export type led_activityCreateManySensorsInputEnvelope = {
    data: led_activityCreateManySensorsInput | led_activityCreateManySensorsInput[]
    skipDuplicates?: boolean
  }

  export type deviceCreateWithoutSensorsInput = {
    device_name: string
    device_purpose?: string | null
    device_ip?: string | null
    status?: string | null
    isdeleted?: Date | string | null
  }

  export type deviceUncheckedCreateWithoutSensorsInput = {
    deviceid?: number
    device_name: string
    device_purpose?: string | null
    device_ip?: string | null
    status?: string | null
    isdeleted?: Date | string | null
  }

  export type deviceCreateOrConnectWithoutSensorsInput = {
    where: deviceWhereUniqueInput
    create: XOR<deviceCreateWithoutSensorsInput, deviceUncheckedCreateWithoutSensorsInput>
  }

  export type temperature_humidityCreateWithoutSensorsInput = {
    temperature?: number | null
    humidity?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type temperature_humidityUncheckedCreateWithoutSensorsInput = {
    temperature_humidityid?: number
    temperature?: number | null
    humidity?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type temperature_humidityCreateOrConnectWithoutSensorsInput = {
    where: temperature_humidityWhereUniqueInput
    create: XOR<temperature_humidityCreateWithoutSensorsInput, temperature_humidityUncheckedCreateWithoutSensorsInput>
  }

  export type temperature_humidityCreateManySensorsInputEnvelope = {
    data: temperature_humidityCreateManySensorsInput | temperature_humidityCreateManySensorsInput[]
    skipDuplicates?: boolean
  }

  export type led_activityUpsertWithWhereUniqueWithoutSensorsInput = {
    where: led_activityWhereUniqueInput
    update: XOR<led_activityUpdateWithoutSensorsInput, led_activityUncheckedUpdateWithoutSensorsInput>
    create: XOR<led_activityCreateWithoutSensorsInput, led_activityUncheckedCreateWithoutSensorsInput>
  }

  export type led_activityUpdateWithWhereUniqueWithoutSensorsInput = {
    where: led_activityWhereUniqueInput
    data: XOR<led_activityUpdateWithoutSensorsInput, led_activityUncheckedUpdateWithoutSensorsInput>
  }

  export type led_activityUpdateManyWithWhereWithoutSensorsInput = {
    where: led_activityScalarWhereInput
    data: XOR<led_activityUpdateManyMutationInput, led_activityUncheckedUpdateManyWithoutSensorsInput>
  }

  export type led_activityScalarWhereInput = {
    AND?: led_activityScalarWhereInput | led_activityScalarWhereInput[]
    OR?: led_activityScalarWhereInput[]
    NOT?: led_activityScalarWhereInput | led_activityScalarWhereInput[]
    led_activitiyid?: IntFilter<"led_activity"> | number
    sensorid?: IntFilter<"led_activity"> | number
    activated?: IntNullableFilter<"led_activity"> | number | null
    datetime?: DateTimeNullableFilter<"led_activity"> | Date | string | null
    isdeleted?: DateTimeNullableFilter<"led_activity"> | Date | string | null
  }

  export type deviceUpsertWithoutSensorsInput = {
    update: XOR<deviceUpdateWithoutSensorsInput, deviceUncheckedUpdateWithoutSensorsInput>
    create: XOR<deviceCreateWithoutSensorsInput, deviceUncheckedCreateWithoutSensorsInput>
    where?: deviceWhereInput
  }

  export type deviceUpdateToOneWithWhereWithoutSensorsInput = {
    where?: deviceWhereInput
    data: XOR<deviceUpdateWithoutSensorsInput, deviceUncheckedUpdateWithoutSensorsInput>
  }

  export type deviceUpdateWithoutSensorsInput = {
    device_name?: StringFieldUpdateOperationsInput | string
    device_purpose?: NullableStringFieldUpdateOperationsInput | string | null
    device_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type deviceUncheckedUpdateWithoutSensorsInput = {
    deviceid?: IntFieldUpdateOperationsInput | number
    device_name?: StringFieldUpdateOperationsInput | string
    device_purpose?: NullableStringFieldUpdateOperationsInput | string | null
    device_ip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type temperature_humidityUpsertWithWhereUniqueWithoutSensorsInput = {
    where: temperature_humidityWhereUniqueInput
    update: XOR<temperature_humidityUpdateWithoutSensorsInput, temperature_humidityUncheckedUpdateWithoutSensorsInput>
    create: XOR<temperature_humidityCreateWithoutSensorsInput, temperature_humidityUncheckedCreateWithoutSensorsInput>
  }

  export type temperature_humidityUpdateWithWhereUniqueWithoutSensorsInput = {
    where: temperature_humidityWhereUniqueInput
    data: XOR<temperature_humidityUpdateWithoutSensorsInput, temperature_humidityUncheckedUpdateWithoutSensorsInput>
  }

  export type temperature_humidityUpdateManyWithWhereWithoutSensorsInput = {
    where: temperature_humidityScalarWhereInput
    data: XOR<temperature_humidityUpdateManyMutationInput, temperature_humidityUncheckedUpdateManyWithoutSensorsInput>
  }

  export type temperature_humidityScalarWhereInput = {
    AND?: temperature_humidityScalarWhereInput | temperature_humidityScalarWhereInput[]
    OR?: temperature_humidityScalarWhereInput[]
    NOT?: temperature_humidityScalarWhereInput | temperature_humidityScalarWhereInput[]
    temperature_humidityid?: IntFilter<"temperature_humidity"> | number
    sensorid?: IntNullableFilter<"temperature_humidity"> | number | null
    temperature?: FloatNullableFilter<"temperature_humidity"> | number | null
    humidity?: FloatNullableFilter<"temperature_humidity"> | number | null
    datetime?: DateTimeNullableFilter<"temperature_humidity"> | Date | string | null
    isdeleted?: DateTimeNullableFilter<"temperature_humidity"> | Date | string | null
  }

  export type sensorsCreateWithoutTemperature_humidityInput = {
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
    led_activity?: led_activityCreateNestedManyWithoutSensorsInput
    device?: deviceCreateNestedOneWithoutSensorsInput
  }

  export type sensorsUncheckedCreateWithoutTemperature_humidityInput = {
    sensorid?: number
    deviceid?: number | null
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
    led_activity?: led_activityUncheckedCreateNestedManyWithoutSensorsInput
  }

  export type sensorsCreateOrConnectWithoutTemperature_humidityInput = {
    where: sensorsWhereUniqueInput
    create: XOR<sensorsCreateWithoutTemperature_humidityInput, sensorsUncheckedCreateWithoutTemperature_humidityInput>
  }

  export type sensorsUpsertWithoutTemperature_humidityInput = {
    update: XOR<sensorsUpdateWithoutTemperature_humidityInput, sensorsUncheckedUpdateWithoutTemperature_humidityInput>
    create: XOR<sensorsCreateWithoutTemperature_humidityInput, sensorsUncheckedCreateWithoutTemperature_humidityInput>
    where?: sensorsWhereInput
  }

  export type sensorsUpdateToOneWithWhereWithoutTemperature_humidityInput = {
    where?: sensorsWhereInput
    data: XOR<sensorsUpdateWithoutTemperature_humidityInput, sensorsUncheckedUpdateWithoutTemperature_humidityInput>
  }

  export type sensorsUpdateWithoutTemperature_humidityInput = {
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    led_activity?: led_activityUpdateManyWithoutSensorsNestedInput
    device?: deviceUpdateOneWithoutSensorsNestedInput
  }

  export type sensorsUncheckedUpdateWithoutTemperature_humidityInput = {
    sensorid?: IntFieldUpdateOperationsInput | number
    deviceid?: NullableIntFieldUpdateOperationsInput | number | null
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    led_activity?: led_activityUncheckedUpdateManyWithoutSensorsNestedInput
  }

  export type sensorsCreateManyDeviceInput = {
    sensorid?: number
    sensor_name: string
    sensor_description?: string | null
    isdeleted?: Date | string | null
  }

  export type sensorsUpdateWithoutDeviceInput = {
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    led_activity?: led_activityUpdateManyWithoutSensorsNestedInput
    temperature_humidity?: temperature_humidityUpdateManyWithoutSensorsNestedInput
  }

  export type sensorsUncheckedUpdateWithoutDeviceInput = {
    sensorid?: IntFieldUpdateOperationsInput | number
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    led_activity?: led_activityUncheckedUpdateManyWithoutSensorsNestedInput
    temperature_humidity?: temperature_humidityUncheckedUpdateManyWithoutSensorsNestedInput
  }

  export type sensorsUncheckedUpdateManyWithoutDeviceInput = {
    sensorid?: IntFieldUpdateOperationsInput | number
    sensor_name?: StringFieldUpdateOperationsInput | string
    sensor_description?: NullableStringFieldUpdateOperationsInput | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type led_activityCreateManySensorsInput = {
    led_activitiyid?: number
    activated?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type temperature_humidityCreateManySensorsInput = {
    temperature_humidityid?: number
    temperature?: number | null
    humidity?: number | null
    datetime?: Date | string | null
    isdeleted?: Date | string | null
  }

  export type led_activityUpdateWithoutSensorsInput = {
    activated?: NullableIntFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type led_activityUncheckedUpdateWithoutSensorsInput = {
    led_activitiyid?: IntFieldUpdateOperationsInput | number
    activated?: NullableIntFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type led_activityUncheckedUpdateManyWithoutSensorsInput = {
    led_activitiyid?: IntFieldUpdateOperationsInput | number
    activated?: NullableIntFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type temperature_humidityUpdateWithoutSensorsInput = {
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type temperature_humidityUncheckedUpdateWithoutSensorsInput = {
    temperature_humidityid?: IntFieldUpdateOperationsInput | number
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type temperature_humidityUncheckedUpdateManyWithoutSensorsInput = {
    temperature_humidityid?: IntFieldUpdateOperationsInput | number
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isdeleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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