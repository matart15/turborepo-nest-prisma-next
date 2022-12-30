import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  DealStatus: any
  EventStatus: any
  StripeInvoiceStatus: any
  StripePaymentStatus: any
  TicketStatus: any
  timestamp: any
  timestamptz: any
  uuid: any
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

export type CurrentUserResponse = {
  __typename?: 'CurrentUserResponse'
  email: Scalars['String']
  id: Scalars['String']
}

/** ordering argument of a cursor */
export const CursorOrdering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC',
} as const

export type CursorOrdering = typeof CursorOrdering[keyof typeof CursorOrdering]
/** columns and relationships of "Deal" */
export type Deal = {
  __typename?: 'Deal'
  closedAt?: Maybe<Scalars['timestamp']>
  createdAt: Scalars['timestamptz']
  /** An object relationship */
  customer: User
  customerId: Scalars['uuid']
  establishedAt?: Maybe<Scalars['timestamp']>
  id: Scalars['uuid']
  paidAt?: Maybe<Scalars['timestamp']>
  receivedAt?: Maybe<Scalars['timestamp']>
  rejectedAt?: Maybe<Scalars['timestamp']>
  shippedAt?: Maybe<Scalars['timestamp']>
  status: Scalars['DealStatus']
  /** An array relationship */
  stripeInvoices: Array<StripeInvoice>
  /** An aggregate relationship */
  stripeInvoicesAggregate: StripeInvoiceAggregate
  /** An object relationship */
  ticket: Ticket
  ticketId: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "Deal" */
export type DealStripeInvoicesArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

/** columns and relationships of "Deal" */
export type DealStripeInvoicesAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

/** aggregated selection of "Deal" */
export type DealAggregate = {
  __typename?: 'DealAggregate'
  aggregate?: Maybe<DealAggregateFields>
  nodes: Array<Deal>
}

/** aggregate fields of "Deal" */
export type DealAggregateFields = {
  __typename?: 'DealAggregateFields'
  count: Scalars['Int']
  max?: Maybe<DealMaxFields>
  min?: Maybe<DealMinFields>
}

/** aggregate fields of "Deal" */
export type DealAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DealSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "Deal" */
export type DealAggregateOrderBy = {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<Deal_Max_Order_By>
  min?: InputMaybe<Deal_Min_Order_By>
}

/** input type for inserting array relation for remote table "Deal" */
export type DealArrRelInsertInput = {
  data: Array<DealInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<DealOnConflict>
}

/** Boolean expression to filter rows from the table "Deal". All fields are combined with a logical 'AND'. */
export type DealBoolExp = {
  _and?: InputMaybe<Array<DealBoolExp>>
  _not?: InputMaybe<DealBoolExp>
  _or?: InputMaybe<Array<DealBoolExp>>
  closedAt?: InputMaybe<TimestampComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  customer?: InputMaybe<UserBoolExp>
  customerId?: InputMaybe<UuidComparisonExp>
  establishedAt?: InputMaybe<TimestampComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  paidAt?: InputMaybe<TimestampComparisonExp>
  receivedAt?: InputMaybe<TimestampComparisonExp>
  rejectedAt?: InputMaybe<TimestampComparisonExp>
  shippedAt?: InputMaybe<TimestampComparisonExp>
  status?: InputMaybe<DealStatusComparisonExp>
  stripeInvoices?: InputMaybe<StripeInvoiceBoolExp>
  stripeInvoices_aggregate?: InputMaybe<StripeInvoice_Aggregate_Bool_Exp>
  ticket?: InputMaybe<TicketBoolExp>
  ticketId?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "Deal" */
export const DealConstraint = {
  /** unique or primary key constraint on columns "id" */
  DealPkey: 'Deal_pkey',
} as const

export type DealConstraint = typeof DealConstraint[keyof typeof DealConstraint]
/** input type for inserting data into table "Deal" */
export type DealInsertInput = {
  closedAt?: InputMaybe<Scalars['timestamp']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  customer?: InputMaybe<UserObjRelInsertInput>
  customerId?: InputMaybe<Scalars['uuid']>
  establishedAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  paidAt?: InputMaybe<Scalars['timestamp']>
  receivedAt?: InputMaybe<Scalars['timestamp']>
  rejectedAt?: InputMaybe<Scalars['timestamp']>
  shippedAt?: InputMaybe<Scalars['timestamp']>
  status?: InputMaybe<Scalars['DealStatus']>
  stripeInvoices?: InputMaybe<StripeInvoiceArrRelInsertInput>
  ticket?: InputMaybe<TicketObjRelInsertInput>
  ticketId?: InputMaybe<Scalars['uuid']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type DealMaxFields = {
  __typename?: 'DealMaxFields'
  closedAt?: Maybe<Scalars['timestamp']>
  createdAt?: Maybe<Scalars['timestamptz']>
  customerId?: Maybe<Scalars['uuid']>
  establishedAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  paidAt?: Maybe<Scalars['timestamp']>
  receivedAt?: Maybe<Scalars['timestamp']>
  rejectedAt?: Maybe<Scalars['timestamp']>
  shippedAt?: Maybe<Scalars['timestamp']>
  status?: Maybe<Scalars['DealStatus']>
  ticketId?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type DealMinFields = {
  __typename?: 'DealMinFields'
  closedAt?: Maybe<Scalars['timestamp']>
  createdAt?: Maybe<Scalars['timestamptz']>
  customerId?: Maybe<Scalars['uuid']>
  establishedAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  paidAt?: Maybe<Scalars['timestamp']>
  receivedAt?: Maybe<Scalars['timestamp']>
  rejectedAt?: Maybe<Scalars['timestamp']>
  shippedAt?: Maybe<Scalars['timestamp']>
  status?: Maybe<Scalars['DealStatus']>
  ticketId?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "Deal" */
export type DealMutationResponse = {
  __typename?: 'DealMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Deal>
}

/** input type for inserting object relation for remote table "Deal" */
export type DealObjRelInsertInput = {
  data: DealInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<DealOnConflict>
}

/** on_conflict condition type for table "Deal" */
export type DealOnConflict = {
  constraint: DealConstraint
  update_columns?: Array<DealUpdateColumn>
  where?: InputMaybe<DealBoolExp>
}

/** Ordering options when selecting data from "Deal". */
export type DealOrderBy = {
  closedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  customer?: InputMaybe<UserOrderBy>
  customerId?: InputMaybe<OrderBy>
  establishedAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  paidAt?: InputMaybe<OrderBy>
  receivedAt?: InputMaybe<OrderBy>
  rejectedAt?: InputMaybe<OrderBy>
  shippedAt?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  stripeInvoicesAggregate?: InputMaybe<StripeInvoiceAggregateOrderBy>
  ticket?: InputMaybe<TicketOrderBy>
  ticketId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Deal */
export type DealPkColumnsInput = {
  id: Scalars['uuid']
}

export type DealResponseDto = {
  __typename?: 'DealResponseDto'
  createdAt: Scalars['DateTime']
  id: Scalars['String']
  status: Scalars['String']
  updatedAt: Scalars['DateTime']
}

/** select columns of table "Deal" */
export const DealSelectColumn = {
  /** column name */
  ClosedAt: 'closedAt',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  CustomerId: 'customerId',
  /** column name */
  EstablishedAt: 'establishedAt',
  /** column name */
  Id: 'id',
  /** column name */
  PaidAt: 'paidAt',
  /** column name */
  ReceivedAt: 'receivedAt',
  /** column name */
  RejectedAt: 'rejectedAt',
  /** column name */
  ShippedAt: 'shippedAt',
  /** column name */
  Status: 'status',
  /** column name */
  TicketId: 'ticketId',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const

export type DealSelectColumn = typeof DealSelectColumn[keyof typeof DealSelectColumn]
/** input type for updating data in table "Deal" */
export type DealSetInput = {
  closedAt?: InputMaybe<Scalars['timestamp']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  customerId?: InputMaybe<Scalars['uuid']>
  establishedAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  paidAt?: InputMaybe<Scalars['timestamp']>
  receivedAt?: InputMaybe<Scalars['timestamp']>
  rejectedAt?: InputMaybe<Scalars['timestamp']>
  shippedAt?: InputMaybe<Scalars['timestamp']>
  status?: InputMaybe<Scalars['DealStatus']>
  ticketId?: InputMaybe<Scalars['uuid']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** Boolean expression to compare columns of type "DealStatus". All fields are combined with logical 'AND'. */
export type DealStatusComparisonExp = {
  _eq?: InputMaybe<Scalars['DealStatus']>
  _gt?: InputMaybe<Scalars['DealStatus']>
  _gte?: InputMaybe<Scalars['DealStatus']>
  _in?: InputMaybe<Array<Scalars['DealStatus']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['DealStatus']>
  _lte?: InputMaybe<Scalars['DealStatus']>
  _neq?: InputMaybe<Scalars['DealStatus']>
  _nin?: InputMaybe<Array<Scalars['DealStatus']>>
}

/** update columns of table "Deal" */
export const DealUpdateColumn = {
  /** column name */
  ClosedAt: 'closedAt',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  CustomerId: 'customerId',
  /** column name */
  EstablishedAt: 'establishedAt',
  /** column name */
  Id: 'id',
  /** column name */
  PaidAt: 'paidAt',
  /** column name */
  ReceivedAt: 'receivedAt',
  /** column name */
  RejectedAt: 'rejectedAt',
  /** column name */
  ShippedAt: 'shippedAt',
  /** column name */
  Status: 'status',
  /** column name */
  TicketId: 'ticketId',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const

export type DealUpdateColumn = typeof DealUpdateColumn[keyof typeof DealUpdateColumn]
export type DealUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DealSetInput>
  where: DealBoolExp
}

export type Deal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deal_Aggregate_Bool_Exp_Count>
}

export type Deal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DealSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<DealBoolExp>
  predicate: IntComparisonExp
}

/** order by max() on columns of table "Deal" */
export type Deal_Max_Order_By = {
  closedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  customerId?: InputMaybe<OrderBy>
  establishedAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  paidAt?: InputMaybe<OrderBy>
  receivedAt?: InputMaybe<OrderBy>
  rejectedAt?: InputMaybe<OrderBy>
  shippedAt?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  ticketId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "Deal" */
export type Deal_Min_Order_By = {
  closedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  customerId?: InputMaybe<OrderBy>
  establishedAt?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  paidAt?: InputMaybe<OrderBy>
  receivedAt?: InputMaybe<OrderBy>
  rejectedAt?: InputMaybe<OrderBy>
  shippedAt?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  ticketId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "Deal" */
export type Deal_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Deal_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Deal_StreamCursorValueInput = {
  closedAt?: InputMaybe<Scalars['timestamp']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  customerId?: InputMaybe<Scalars['uuid']>
  establishedAt?: InputMaybe<Scalars['timestamp']>
  id?: InputMaybe<Scalars['uuid']>
  paidAt?: InputMaybe<Scalars['timestamp']>
  receivedAt?: InputMaybe<Scalars['timestamp']>
  rejectedAt?: InputMaybe<Scalars['timestamp']>
  shippedAt?: InputMaybe<Scalars['timestamp']>
  status?: InputMaybe<Scalars['DealStatus']>
  ticketId?: InputMaybe<Scalars['uuid']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** columns and relationships of "Event" */
export type Event = {
  __typename?: 'Event'
  createdAt: Scalars['timestamptz']
  /** An object relationship */
  favoriteEvent?: Maybe<FavoriteEvent>
  id: Scalars['uuid']
  name: Scalars['String']
  startAt: Scalars['timestamp']
  status: Scalars['EventStatus']
  /** An array relationship */
  tickets: Array<Ticket>
  /** An aggregate relationship */
  ticketsAggregate: TicketAggregate
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "Event" */
export type EventTicketsArgs = {
  distinctOn?: InputMaybe<Array<TicketSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy>>
  where?: InputMaybe<TicketBoolExp>
}

/** columns and relationships of "Event" */
export type EventTicketsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TicketSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy>>
  where?: InputMaybe<TicketBoolExp>
}

/** aggregated selection of "Event" */
export type EventAggregate = {
  __typename?: 'EventAggregate'
  aggregate?: Maybe<EventAggregateFields>
  nodes: Array<Event>
}

/** aggregate fields of "Event" */
export type EventAggregateFields = {
  __typename?: 'EventAggregateFields'
  count: Scalars['Int']
  max?: Maybe<EventMaxFields>
  min?: Maybe<EventMinFields>
}

/** aggregate fields of "Event" */
export type EventAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EventSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "Event". All fields are combined with a logical 'AND'. */
export type EventBoolExp = {
  _and?: InputMaybe<Array<EventBoolExp>>
  _not?: InputMaybe<EventBoolExp>
  _or?: InputMaybe<Array<EventBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  favoriteEvent?: InputMaybe<FavoriteEventBoolExp>
  id?: InputMaybe<UuidComparisonExp>
  name?: InputMaybe<StringComparisonExp>
  startAt?: InputMaybe<TimestampComparisonExp>
  status?: InputMaybe<EventStatusComparisonExp>
  tickets?: InputMaybe<TicketBoolExp>
  tickets_aggregate?: InputMaybe<Ticket_Aggregate_Bool_Exp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "Event" */
export const EventConstraint = {
  /** unique or primary key constraint on columns "id" */
  EventPkey: 'Event_pkey',
} as const

export type EventConstraint = typeof EventConstraint[keyof typeof EventConstraint]
/** input type for inserting data into table "Event" */
export type EventInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  favoriteEvent?: InputMaybe<FavoriteEventObjRelInsertInput>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  startAt?: InputMaybe<Scalars['timestamp']>
  status?: InputMaybe<Scalars['EventStatus']>
  tickets?: InputMaybe<TicketArrRelInsertInput>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type EventMaxFields = {
  __typename?: 'EventMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  startAt?: Maybe<Scalars['timestamp']>
  status?: Maybe<Scalars['EventStatus']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type EventMinFields = {
  __typename?: 'EventMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  startAt?: Maybe<Scalars['timestamp']>
  status?: Maybe<Scalars['EventStatus']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "Event" */
export type EventMutationResponse = {
  __typename?: 'EventMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Event>
}

/** input type for inserting object relation for remote table "Event" */
export type EventObjRelInsertInput = {
  data: EventInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<EventOnConflict>
}

/** on_conflict condition type for table "Event" */
export type EventOnConflict = {
  constraint: EventConstraint
  update_columns?: Array<EventUpdateColumn>
  where?: InputMaybe<EventBoolExp>
}

/** Ordering options when selecting data from "Event". */
export type EventOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  favoriteEvent?: InputMaybe<FavoriteEventOrderBy>
  id?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
  startAt?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  ticketsAggregate?: InputMaybe<TicketAggregateOrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Event */
export type EventPkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "Event" */
export const EventSelectColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  StartAt: 'startAt',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const

export type EventSelectColumn = typeof EventSelectColumn[keyof typeof EventSelectColumn]
/** input type for updating data in table "Event" */
export type EventSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  startAt?: InputMaybe<Scalars['timestamp']>
  status?: InputMaybe<Scalars['EventStatus']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** Boolean expression to compare columns of type "EventStatus". All fields are combined with logical 'AND'. */
export type EventStatusComparisonExp = {
  _eq?: InputMaybe<Scalars['EventStatus']>
  _gt?: InputMaybe<Scalars['EventStatus']>
  _gte?: InputMaybe<Scalars['EventStatus']>
  _in?: InputMaybe<Array<Scalars['EventStatus']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['EventStatus']>
  _lte?: InputMaybe<Scalars['EventStatus']>
  _neq?: InputMaybe<Scalars['EventStatus']>
  _nin?: InputMaybe<Array<Scalars['EventStatus']>>
}

/** update columns of table "Event" */
export const EventUpdateColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  StartAt: 'startAt',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const

export type EventUpdateColumn = typeof EventUpdateColumn[keyof typeof EventUpdateColumn]
export type EventUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EventSetInput>
  where: EventBoolExp
}

/** Streaming cursor of the table "Event" */
export type Event_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Event_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Event_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  startAt?: InputMaybe<Scalars['timestamp']>
  status?: InputMaybe<Scalars['EventStatus']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** columns and relationships of "FavoriteEvent" */
export type FavoriteEvent = {
  __typename?: 'FavoriteEvent'
  createdAt: Scalars['timestamptz']
  /** An object relationship */
  event: Event
  eventId: Scalars['uuid']
  id: Scalars['uuid']
  updatedAt: Scalars['timestamptz']
  userId: Scalars['uuid']
}

/** aggregated selection of "FavoriteEvent" */
export type FavoriteEventAggregate = {
  __typename?: 'FavoriteEventAggregate'
  aggregate?: Maybe<FavoriteEventAggregateFields>
  nodes: Array<FavoriteEvent>
}

/** aggregate fields of "FavoriteEvent" */
export type FavoriteEventAggregateFields = {
  __typename?: 'FavoriteEventAggregateFields'
  count: Scalars['Int']
  max?: Maybe<FavoriteEventMaxFields>
  min?: Maybe<FavoriteEventMinFields>
}

/** aggregate fields of "FavoriteEvent" */
export type FavoriteEventAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FavoriteEventSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "FavoriteEvent". All fields are combined with a logical 'AND'. */
export type FavoriteEventBoolExp = {
  _and?: InputMaybe<Array<FavoriteEventBoolExp>>
  _not?: InputMaybe<FavoriteEventBoolExp>
  _or?: InputMaybe<Array<FavoriteEventBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  event?: InputMaybe<EventBoolExp>
  eventId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  userId?: InputMaybe<UuidComparisonExp>
}

/** unique or primary key constraints on table "FavoriteEvent" */
export const FavoriteEventConstraint = {
  /** unique or primary key constraint on columns "eventId", "userId" */
  FavoriteEventEventIdUserIdKey: 'FavoriteEvent_eventId_userId_key',
  /** unique or primary key constraint on columns "id" */
  FavoriteEventPkey: 'FavoriteEvent_pkey',
} as const

export type FavoriteEventConstraint = typeof FavoriteEventConstraint[keyof typeof FavoriteEventConstraint]
/** input type for inserting data into table "FavoriteEvent" */
export type FavoriteEventInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  event?: InputMaybe<EventObjRelInsertInput>
  eventId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type FavoriteEventMaxFields = {
  __typename?: 'FavoriteEventMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  eventId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type FavoriteEventMinFields = {
  __typename?: 'FavoriteEventMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  eventId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "FavoriteEvent" */
export type FavoriteEventMutationResponse = {
  __typename?: 'FavoriteEventMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<FavoriteEvent>
}

/** input type for inserting object relation for remote table "FavoriteEvent" */
export type FavoriteEventObjRelInsertInput = {
  data: FavoriteEventInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<FavoriteEventOnConflict>
}

/** on_conflict condition type for table "FavoriteEvent" */
export type FavoriteEventOnConflict = {
  constraint: FavoriteEventConstraint
  update_columns?: Array<FavoriteEventUpdateColumn>
  where?: InputMaybe<FavoriteEventBoolExp>
}

/** Ordering options when selecting data from "FavoriteEvent". */
export type FavoriteEventOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  event?: InputMaybe<EventOrderBy>
  eventId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: FavoriteEvent */
export type FavoriteEventPkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "FavoriteEvent" */
export const FavoriteEventSelectColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  EventId: 'eventId',
  /** column name */
  Id: 'id',
  /** column name */
  UpdatedAt: 'updatedAt',
  /** column name */
  UserId: 'userId',
} as const

export type FavoriteEventSelectColumn = typeof FavoriteEventSelectColumn[keyof typeof FavoriteEventSelectColumn]
/** input type for updating data in table "FavoriteEvent" */
export type FavoriteEventSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  eventId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** update columns of table "FavoriteEvent" */
export const FavoriteEventUpdateColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  EventId: 'eventId',
  /** column name */
  Id: 'id',
  /** column name */
  UpdatedAt: 'updatedAt',
  /** column name */
  UserId: 'userId',
} as const

export type FavoriteEventUpdateColumn = typeof FavoriteEventUpdateColumn[keyof typeof FavoriteEventUpdateColumn]
export type FavoriteEventUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FavoriteEventSetInput>
  where: FavoriteEventBoolExp
}

/** Streaming cursor of the table "FavoriteEvent" */
export type FavoriteEvent_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FavoriteEvent_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type FavoriteEvent_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  eventId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** column ordering options */
export const OrderBy = {
  /** in ascending order, nulls last */
  Asc: 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst: 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast: 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc: 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst: 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast: 'DESC_NULLS_LAST',
} as const

export type OrderBy = typeof OrderBy[keyof typeof OrderBy]
/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _isNull?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** columns and relationships of "StripeInvoice" */
export type StripeInvoice = {
  __typename?: 'StripeInvoice'
  acquiredPoints: Scalars['Int']
  amount: Scalars['Int']
  capturedAt?: Maybe<Scalars['timestamp']>
  createdAt: Scalars['timestamptz']
  customerPaymentFee: Scalars['Int']
  customerTransactionFee: Scalars['Int']
  /** An object relationship */
  deal: Deal
  dealId: Scalars['uuid']
  exReflectedAmount: Scalars['Int']
  exRefundedAmount: Scalars['Int']
  exSystemIncome: Scalars['Int']
  id: Scalars['uuid']
  insuranceFee: Scalars['Int']
  is3dsUsed: Scalars['Boolean']
  isDisputed: Scalars['Boolean']
  isValid: Scalars['Boolean']
  reflectedAt?: Maybe<Scalars['timestamp']>
  refundedAt?: Maybe<Scalars['timestamp']>
  releasedAt?: Maybe<Scalars['timestamp']>
  riskScore: Scalars['Int']
  sellerCancelFee: Scalars['Int']
  sellerTransactionFee: Scalars['Int']
  status: Scalars['StripeInvoiceStatus']
  stripeCaptured: Scalars['Boolean']
  stripeIntentUid?: Maybe<Scalars['String']>
  stripePaid: Scalars['Boolean']
  /** An object relationship */
  stripePayment: StripePayment
  stripePaymentId: Scalars['uuid']
  stripePaymentIntentId: Scalars['String']
  stripeRefundUid?: Maybe<Scalars['String']>
  stripeRefunded: Scalars['Boolean']
  syncedAt?: Maybe<Scalars['timestamp']>
  totalTicketPrice: Scalars['Int']
  updatedAt: Scalars['timestamptz']
  usedPoints: Scalars['Int']
  /** An object relationship */
  user: User
  userId: Scalars['uuid']
}

/** aggregated selection of "StripeInvoice" */
export type StripeInvoiceAggregate = {
  __typename?: 'StripeInvoiceAggregate'
  aggregate?: Maybe<StripeInvoiceAggregateFields>
  nodes: Array<StripeInvoice>
}

/** aggregate fields of "StripeInvoice" */
export type StripeInvoiceAggregateFields = {
  __typename?: 'StripeInvoiceAggregateFields'
  avg?: Maybe<StripeInvoiceAvgFields>
  count: Scalars['Int']
  max?: Maybe<StripeInvoiceMaxFields>
  min?: Maybe<StripeInvoiceMinFields>
  stddev?: Maybe<StripeInvoiceStddevFields>
  stddevPop?: Maybe<StripeInvoiceStddev_PopFields>
  stddevSamp?: Maybe<StripeInvoiceStddev_SampFields>
  sum?: Maybe<StripeInvoiceSumFields>
  varPop?: Maybe<StripeInvoiceVar_PopFields>
  varSamp?: Maybe<StripeInvoiceVar_SampFields>
  variance?: Maybe<StripeInvoiceVarianceFields>
}

/** aggregate fields of "StripeInvoice" */
export type StripeInvoiceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "StripeInvoice" */
export type StripeInvoiceAggregateOrderBy = {
  avg?: InputMaybe<StripeInvoice_Avg_Order_By>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<StripeInvoice_Max_Order_By>
  min?: InputMaybe<StripeInvoice_Min_Order_By>
  stddev?: InputMaybe<StripeInvoice_Stddev_Order_By>
  stddev_pop?: InputMaybe<StripeInvoice_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<StripeInvoice_Stddev_Samp_Order_By>
  sum?: InputMaybe<StripeInvoice_Sum_Order_By>
  var_pop?: InputMaybe<StripeInvoice_Var_Pop_Order_By>
  var_samp?: InputMaybe<StripeInvoice_Var_Samp_Order_By>
  variance?: InputMaybe<StripeInvoice_Variance_Order_By>
}

/** input type for inserting array relation for remote table "StripeInvoice" */
export type StripeInvoiceArrRelInsertInput = {
  data: Array<StripeInvoiceInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<StripeInvoiceOnConflict>
}

/** aggregate avg on columns */
export type StripeInvoiceAvgFields = {
  __typename?: 'StripeInvoiceAvgFields'
  acquiredPoints?: Maybe<Scalars['Float']>
  amount?: Maybe<Scalars['Float']>
  customerPaymentFee?: Maybe<Scalars['Float']>
  customerTransactionFee?: Maybe<Scalars['Float']>
  exReflectedAmount?: Maybe<Scalars['Float']>
  exRefundedAmount?: Maybe<Scalars['Float']>
  exSystemIncome?: Maybe<Scalars['Float']>
  insuranceFee?: Maybe<Scalars['Float']>
  riskScore?: Maybe<Scalars['Float']>
  sellerCancelFee?: Maybe<Scalars['Float']>
  sellerTransactionFee?: Maybe<Scalars['Float']>
  totalTicketPrice?: Maybe<Scalars['Float']>
  usedPoints?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "StripeInvoice". All fields are combined with a logical 'AND'. */
export type StripeInvoiceBoolExp = {
  _and?: InputMaybe<Array<StripeInvoiceBoolExp>>
  _not?: InputMaybe<StripeInvoiceBoolExp>
  _or?: InputMaybe<Array<StripeInvoiceBoolExp>>
  acquiredPoints?: InputMaybe<IntComparisonExp>
  amount?: InputMaybe<IntComparisonExp>
  capturedAt?: InputMaybe<TimestampComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  customerPaymentFee?: InputMaybe<IntComparisonExp>
  customerTransactionFee?: InputMaybe<IntComparisonExp>
  deal?: InputMaybe<DealBoolExp>
  dealId?: InputMaybe<UuidComparisonExp>
  exReflectedAmount?: InputMaybe<IntComparisonExp>
  exRefundedAmount?: InputMaybe<IntComparisonExp>
  exSystemIncome?: InputMaybe<IntComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  insuranceFee?: InputMaybe<IntComparisonExp>
  is3dsUsed?: InputMaybe<BooleanComparisonExp>
  isDisputed?: InputMaybe<BooleanComparisonExp>
  isValid?: InputMaybe<BooleanComparisonExp>
  reflectedAt?: InputMaybe<TimestampComparisonExp>
  refundedAt?: InputMaybe<TimestampComparisonExp>
  releasedAt?: InputMaybe<TimestampComparisonExp>
  riskScore?: InputMaybe<IntComparisonExp>
  sellerCancelFee?: InputMaybe<IntComparisonExp>
  sellerTransactionFee?: InputMaybe<IntComparisonExp>
  status?: InputMaybe<StripeInvoiceStatusComparisonExp>
  stripeCaptured?: InputMaybe<BooleanComparisonExp>
  stripeIntentUid?: InputMaybe<StringComparisonExp>
  stripePaid?: InputMaybe<BooleanComparisonExp>
  stripePayment?: InputMaybe<StripePaymentBoolExp>
  stripePaymentId?: InputMaybe<UuidComparisonExp>
  stripePaymentIntentId?: InputMaybe<StringComparisonExp>
  stripeRefundUid?: InputMaybe<StringComparisonExp>
  stripeRefunded?: InputMaybe<BooleanComparisonExp>
  syncedAt?: InputMaybe<TimestampComparisonExp>
  totalTicketPrice?: InputMaybe<IntComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  usedPoints?: InputMaybe<IntComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userId?: InputMaybe<UuidComparisonExp>
}

/** unique or primary key constraints on table "StripeInvoice" */
export const StripeInvoiceConstraint = {
  /** unique or primary key constraint on columns "dealId" */
  StripeInvoiceDealIdKey: 'StripeInvoice_dealId_key',
  /** unique or primary key constraint on columns "id" */
  StripeInvoicePkey: 'StripeInvoice_pkey',
} as const

export type StripeInvoiceConstraint = typeof StripeInvoiceConstraint[keyof typeof StripeInvoiceConstraint]
/** input type for incrementing numeric columns in table "StripeInvoice" */
export type StripeInvoiceIncInput = {
  acquiredPoints?: InputMaybe<Scalars['Int']>
  amount?: InputMaybe<Scalars['Int']>
  customerPaymentFee?: InputMaybe<Scalars['Int']>
  customerTransactionFee?: InputMaybe<Scalars['Int']>
  exReflectedAmount?: InputMaybe<Scalars['Int']>
  exRefundedAmount?: InputMaybe<Scalars['Int']>
  exSystemIncome?: InputMaybe<Scalars['Int']>
  insuranceFee?: InputMaybe<Scalars['Int']>
  riskScore?: InputMaybe<Scalars['Int']>
  sellerCancelFee?: InputMaybe<Scalars['Int']>
  sellerTransactionFee?: InputMaybe<Scalars['Int']>
  totalTicketPrice?: InputMaybe<Scalars['Int']>
  usedPoints?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "StripeInvoice" */
export type StripeInvoiceInsertInput = {
  acquiredPoints?: InputMaybe<Scalars['Int']>
  amount?: InputMaybe<Scalars['Int']>
  capturedAt?: InputMaybe<Scalars['timestamp']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  customerPaymentFee?: InputMaybe<Scalars['Int']>
  customerTransactionFee?: InputMaybe<Scalars['Int']>
  deal?: InputMaybe<DealObjRelInsertInput>
  dealId?: InputMaybe<Scalars['uuid']>
  exReflectedAmount?: InputMaybe<Scalars['Int']>
  exRefundedAmount?: InputMaybe<Scalars['Int']>
  exSystemIncome?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  insuranceFee?: InputMaybe<Scalars['Int']>
  is3dsUsed?: InputMaybe<Scalars['Boolean']>
  isDisputed?: InputMaybe<Scalars['Boolean']>
  isValid?: InputMaybe<Scalars['Boolean']>
  reflectedAt?: InputMaybe<Scalars['timestamp']>
  refundedAt?: InputMaybe<Scalars['timestamp']>
  releasedAt?: InputMaybe<Scalars['timestamp']>
  riskScore?: InputMaybe<Scalars['Int']>
  sellerCancelFee?: InputMaybe<Scalars['Int']>
  sellerTransactionFee?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<Scalars['StripeInvoiceStatus']>
  stripeCaptured?: InputMaybe<Scalars['Boolean']>
  stripeIntentUid?: InputMaybe<Scalars['String']>
  stripePaid?: InputMaybe<Scalars['Boolean']>
  stripePayment?: InputMaybe<StripePaymentObjRelInsertInput>
  stripePaymentId?: InputMaybe<Scalars['uuid']>
  stripePaymentIntentId?: InputMaybe<Scalars['String']>
  stripeRefundUid?: InputMaybe<Scalars['String']>
  stripeRefunded?: InputMaybe<Scalars['Boolean']>
  syncedAt?: InputMaybe<Scalars['timestamp']>
  totalTicketPrice?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  usedPoints?: InputMaybe<Scalars['Int']>
  user?: InputMaybe<UserObjRelInsertInput>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type StripeInvoiceMaxFields = {
  __typename?: 'StripeInvoiceMaxFields'
  acquiredPoints?: Maybe<Scalars['Int']>
  amount?: Maybe<Scalars['Int']>
  capturedAt?: Maybe<Scalars['timestamp']>
  createdAt?: Maybe<Scalars['timestamptz']>
  customerPaymentFee?: Maybe<Scalars['Int']>
  customerTransactionFee?: Maybe<Scalars['Int']>
  dealId?: Maybe<Scalars['uuid']>
  exReflectedAmount?: Maybe<Scalars['Int']>
  exRefundedAmount?: Maybe<Scalars['Int']>
  exSystemIncome?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['uuid']>
  insuranceFee?: Maybe<Scalars['Int']>
  reflectedAt?: Maybe<Scalars['timestamp']>
  refundedAt?: Maybe<Scalars['timestamp']>
  releasedAt?: Maybe<Scalars['timestamp']>
  riskScore?: Maybe<Scalars['Int']>
  sellerCancelFee?: Maybe<Scalars['Int']>
  sellerTransactionFee?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['StripeInvoiceStatus']>
  stripeIntentUid?: Maybe<Scalars['String']>
  stripePaymentId?: Maybe<Scalars['uuid']>
  stripePaymentIntentId?: Maybe<Scalars['String']>
  stripeRefundUid?: Maybe<Scalars['String']>
  syncedAt?: Maybe<Scalars['timestamp']>
  totalTicketPrice?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  usedPoints?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type StripeInvoiceMinFields = {
  __typename?: 'StripeInvoiceMinFields'
  acquiredPoints?: Maybe<Scalars['Int']>
  amount?: Maybe<Scalars['Int']>
  capturedAt?: Maybe<Scalars['timestamp']>
  createdAt?: Maybe<Scalars['timestamptz']>
  customerPaymentFee?: Maybe<Scalars['Int']>
  customerTransactionFee?: Maybe<Scalars['Int']>
  dealId?: Maybe<Scalars['uuid']>
  exReflectedAmount?: Maybe<Scalars['Int']>
  exRefundedAmount?: Maybe<Scalars['Int']>
  exSystemIncome?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['uuid']>
  insuranceFee?: Maybe<Scalars['Int']>
  reflectedAt?: Maybe<Scalars['timestamp']>
  refundedAt?: Maybe<Scalars['timestamp']>
  releasedAt?: Maybe<Scalars['timestamp']>
  riskScore?: Maybe<Scalars['Int']>
  sellerCancelFee?: Maybe<Scalars['Int']>
  sellerTransactionFee?: Maybe<Scalars['Int']>
  status?: Maybe<Scalars['StripeInvoiceStatus']>
  stripeIntentUid?: Maybe<Scalars['String']>
  stripePaymentId?: Maybe<Scalars['uuid']>
  stripePaymentIntentId?: Maybe<Scalars['String']>
  stripeRefundUid?: Maybe<Scalars['String']>
  syncedAt?: Maybe<Scalars['timestamp']>
  totalTicketPrice?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  usedPoints?: Maybe<Scalars['Int']>
  userId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "StripeInvoice" */
export type StripeInvoiceMutationResponse = {
  __typename?: 'StripeInvoiceMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<StripeInvoice>
}

/** on_conflict condition type for table "StripeInvoice" */
export type StripeInvoiceOnConflict = {
  constraint: StripeInvoiceConstraint
  update_columns?: Array<StripeInvoiceUpdateColumn>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

/** Ordering options when selecting data from "StripeInvoice". */
export type StripeInvoiceOrderBy = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  capturedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  deal?: InputMaybe<DealOrderBy>
  dealId?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  is3dsUsed?: InputMaybe<OrderBy>
  isDisputed?: InputMaybe<OrderBy>
  isValid?: InputMaybe<OrderBy>
  reflectedAt?: InputMaybe<OrderBy>
  refundedAt?: InputMaybe<OrderBy>
  releasedAt?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  stripeCaptured?: InputMaybe<OrderBy>
  stripeIntentUid?: InputMaybe<OrderBy>
  stripePaid?: InputMaybe<OrderBy>
  stripePayment?: InputMaybe<StripePaymentOrderBy>
  stripePaymentId?: InputMaybe<OrderBy>
  stripePaymentIntentId?: InputMaybe<OrderBy>
  stripeRefundUid?: InputMaybe<OrderBy>
  stripeRefunded?: InputMaybe<OrderBy>
  syncedAt?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: StripeInvoice */
export type StripeInvoicePkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "StripeInvoice" */
export const StripeInvoiceSelectColumn = {
  /** column name */
  AcquiredPoints: 'acquiredPoints',
  /** column name */
  Amount: 'amount',
  /** column name */
  CapturedAt: 'capturedAt',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  CustomerPaymentFee: 'customerPaymentFee',
  /** column name */
  CustomerTransactionFee: 'customerTransactionFee',
  /** column name */
  DealId: 'dealId',
  /** column name */
  ExReflectedAmount: 'exReflectedAmount',
  /** column name */
  ExRefundedAmount: 'exRefundedAmount',
  /** column name */
  ExSystemIncome: 'exSystemIncome',
  /** column name */
  Id: 'id',
  /** column name */
  InsuranceFee: 'insuranceFee',
  /** column name */
  Is3dsUsed: 'is3dsUsed',
  /** column name */
  IsDisputed: 'isDisputed',
  /** column name */
  IsValid: 'isValid',
  /** column name */
  ReflectedAt: 'reflectedAt',
  /** column name */
  RefundedAt: 'refundedAt',
  /** column name */
  ReleasedAt: 'releasedAt',
  /** column name */
  RiskScore: 'riskScore',
  /** column name */
  SellerCancelFee: 'sellerCancelFee',
  /** column name */
  SellerTransactionFee: 'sellerTransactionFee',
  /** column name */
  Status: 'status',
  /** column name */
  StripeCaptured: 'stripeCaptured',
  /** column name */
  StripeIntentUid: 'stripeIntentUid',
  /** column name */
  StripePaid: 'stripePaid',
  /** column name */
  StripePaymentId: 'stripePaymentId',
  /** column name */
  StripePaymentIntentId: 'stripePaymentIntentId',
  /** column name */
  StripeRefundUid: 'stripeRefundUid',
  /** column name */
  StripeRefunded: 'stripeRefunded',
  /** column name */
  SyncedAt: 'syncedAt',
  /** column name */
  TotalTicketPrice: 'totalTicketPrice',
  /** column name */
  UpdatedAt: 'updatedAt',
  /** column name */
  UsedPoints: 'usedPoints',
  /** column name */
  UserId: 'userId',
} as const

export type StripeInvoiceSelectColumn = typeof StripeInvoiceSelectColumn[keyof typeof StripeInvoiceSelectColumn]
/** input type for updating data in table "StripeInvoice" */
export type StripeInvoiceSetInput = {
  acquiredPoints?: InputMaybe<Scalars['Int']>
  amount?: InputMaybe<Scalars['Int']>
  capturedAt?: InputMaybe<Scalars['timestamp']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  customerPaymentFee?: InputMaybe<Scalars['Int']>
  customerTransactionFee?: InputMaybe<Scalars['Int']>
  dealId?: InputMaybe<Scalars['uuid']>
  exReflectedAmount?: InputMaybe<Scalars['Int']>
  exRefundedAmount?: InputMaybe<Scalars['Int']>
  exSystemIncome?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  insuranceFee?: InputMaybe<Scalars['Int']>
  is3dsUsed?: InputMaybe<Scalars['Boolean']>
  isDisputed?: InputMaybe<Scalars['Boolean']>
  isValid?: InputMaybe<Scalars['Boolean']>
  reflectedAt?: InputMaybe<Scalars['timestamp']>
  refundedAt?: InputMaybe<Scalars['timestamp']>
  releasedAt?: InputMaybe<Scalars['timestamp']>
  riskScore?: InputMaybe<Scalars['Int']>
  sellerCancelFee?: InputMaybe<Scalars['Int']>
  sellerTransactionFee?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<Scalars['StripeInvoiceStatus']>
  stripeCaptured?: InputMaybe<Scalars['Boolean']>
  stripeIntentUid?: InputMaybe<Scalars['String']>
  stripePaid?: InputMaybe<Scalars['Boolean']>
  stripePaymentId?: InputMaybe<Scalars['uuid']>
  stripePaymentIntentId?: InputMaybe<Scalars['String']>
  stripeRefundUid?: InputMaybe<Scalars['String']>
  stripeRefunded?: InputMaybe<Scalars['Boolean']>
  syncedAt?: InputMaybe<Scalars['timestamp']>
  totalTicketPrice?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  usedPoints?: InputMaybe<Scalars['Int']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** Boolean expression to compare columns of type "StripeInvoiceStatus". All fields are combined with logical 'AND'. */
export type StripeInvoiceStatusComparisonExp = {
  _eq?: InputMaybe<Scalars['StripeInvoiceStatus']>
  _gt?: InputMaybe<Scalars['StripeInvoiceStatus']>
  _gte?: InputMaybe<Scalars['StripeInvoiceStatus']>
  _in?: InputMaybe<Array<Scalars['StripeInvoiceStatus']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['StripeInvoiceStatus']>
  _lte?: InputMaybe<Scalars['StripeInvoiceStatus']>
  _neq?: InputMaybe<Scalars['StripeInvoiceStatus']>
  _nin?: InputMaybe<Array<Scalars['StripeInvoiceStatus']>>
}

/** aggregate stddev on columns */
export type StripeInvoiceStddevFields = {
  __typename?: 'StripeInvoiceStddevFields'
  acquiredPoints?: Maybe<Scalars['Float']>
  amount?: Maybe<Scalars['Float']>
  customerPaymentFee?: Maybe<Scalars['Float']>
  customerTransactionFee?: Maybe<Scalars['Float']>
  exReflectedAmount?: Maybe<Scalars['Float']>
  exRefundedAmount?: Maybe<Scalars['Float']>
  exSystemIncome?: Maybe<Scalars['Float']>
  insuranceFee?: Maybe<Scalars['Float']>
  riskScore?: Maybe<Scalars['Float']>
  sellerCancelFee?: Maybe<Scalars['Float']>
  sellerTransactionFee?: Maybe<Scalars['Float']>
  totalTicketPrice?: Maybe<Scalars['Float']>
  usedPoints?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type StripeInvoiceStddev_PopFields = {
  __typename?: 'StripeInvoiceStddev_popFields'
  acquiredPoints?: Maybe<Scalars['Float']>
  amount?: Maybe<Scalars['Float']>
  customerPaymentFee?: Maybe<Scalars['Float']>
  customerTransactionFee?: Maybe<Scalars['Float']>
  exReflectedAmount?: Maybe<Scalars['Float']>
  exRefundedAmount?: Maybe<Scalars['Float']>
  exSystemIncome?: Maybe<Scalars['Float']>
  insuranceFee?: Maybe<Scalars['Float']>
  riskScore?: Maybe<Scalars['Float']>
  sellerCancelFee?: Maybe<Scalars['Float']>
  sellerTransactionFee?: Maybe<Scalars['Float']>
  totalTicketPrice?: Maybe<Scalars['Float']>
  usedPoints?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type StripeInvoiceStddev_SampFields = {
  __typename?: 'StripeInvoiceStddev_sampFields'
  acquiredPoints?: Maybe<Scalars['Float']>
  amount?: Maybe<Scalars['Float']>
  customerPaymentFee?: Maybe<Scalars['Float']>
  customerTransactionFee?: Maybe<Scalars['Float']>
  exReflectedAmount?: Maybe<Scalars['Float']>
  exRefundedAmount?: Maybe<Scalars['Float']>
  exSystemIncome?: Maybe<Scalars['Float']>
  insuranceFee?: Maybe<Scalars['Float']>
  riskScore?: Maybe<Scalars['Float']>
  sellerCancelFee?: Maybe<Scalars['Float']>
  sellerTransactionFee?: Maybe<Scalars['Float']>
  totalTicketPrice?: Maybe<Scalars['Float']>
  usedPoints?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type StripeInvoiceSumFields = {
  __typename?: 'StripeInvoiceSumFields'
  acquiredPoints?: Maybe<Scalars['Int']>
  amount?: Maybe<Scalars['Int']>
  customerPaymentFee?: Maybe<Scalars['Int']>
  customerTransactionFee?: Maybe<Scalars['Int']>
  exReflectedAmount?: Maybe<Scalars['Int']>
  exRefundedAmount?: Maybe<Scalars['Int']>
  exSystemIncome?: Maybe<Scalars['Int']>
  insuranceFee?: Maybe<Scalars['Int']>
  riskScore?: Maybe<Scalars['Int']>
  sellerCancelFee?: Maybe<Scalars['Int']>
  sellerTransactionFee?: Maybe<Scalars['Int']>
  totalTicketPrice?: Maybe<Scalars['Int']>
  usedPoints?: Maybe<Scalars['Int']>
}

/** update columns of table "StripeInvoice" */
export const StripeInvoiceUpdateColumn = {
  /** column name */
  AcquiredPoints: 'acquiredPoints',
  /** column name */
  Amount: 'amount',
  /** column name */
  CapturedAt: 'capturedAt',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  CustomerPaymentFee: 'customerPaymentFee',
  /** column name */
  CustomerTransactionFee: 'customerTransactionFee',
  /** column name */
  DealId: 'dealId',
  /** column name */
  ExReflectedAmount: 'exReflectedAmount',
  /** column name */
  ExRefundedAmount: 'exRefundedAmount',
  /** column name */
  ExSystemIncome: 'exSystemIncome',
  /** column name */
  Id: 'id',
  /** column name */
  InsuranceFee: 'insuranceFee',
  /** column name */
  Is3dsUsed: 'is3dsUsed',
  /** column name */
  IsDisputed: 'isDisputed',
  /** column name */
  IsValid: 'isValid',
  /** column name */
  ReflectedAt: 'reflectedAt',
  /** column name */
  RefundedAt: 'refundedAt',
  /** column name */
  ReleasedAt: 'releasedAt',
  /** column name */
  RiskScore: 'riskScore',
  /** column name */
  SellerCancelFee: 'sellerCancelFee',
  /** column name */
  SellerTransactionFee: 'sellerTransactionFee',
  /** column name */
  Status: 'status',
  /** column name */
  StripeCaptured: 'stripeCaptured',
  /** column name */
  StripeIntentUid: 'stripeIntentUid',
  /** column name */
  StripePaid: 'stripePaid',
  /** column name */
  StripePaymentId: 'stripePaymentId',
  /** column name */
  StripePaymentIntentId: 'stripePaymentIntentId',
  /** column name */
  StripeRefundUid: 'stripeRefundUid',
  /** column name */
  StripeRefunded: 'stripeRefunded',
  /** column name */
  SyncedAt: 'syncedAt',
  /** column name */
  TotalTicketPrice: 'totalTicketPrice',
  /** column name */
  UpdatedAt: 'updatedAt',
  /** column name */
  UsedPoints: 'usedPoints',
  /** column name */
  UserId: 'userId',
} as const

export type StripeInvoiceUpdateColumn = typeof StripeInvoiceUpdateColumn[keyof typeof StripeInvoiceUpdateColumn]
export type StripeInvoiceUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<StripeInvoiceIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripeInvoiceSetInput>
  where: StripeInvoiceBoolExp
}

/** aggregate var_pop on columns */
export type StripeInvoiceVar_PopFields = {
  __typename?: 'StripeInvoiceVar_popFields'
  acquiredPoints?: Maybe<Scalars['Float']>
  amount?: Maybe<Scalars['Float']>
  customerPaymentFee?: Maybe<Scalars['Float']>
  customerTransactionFee?: Maybe<Scalars['Float']>
  exReflectedAmount?: Maybe<Scalars['Float']>
  exRefundedAmount?: Maybe<Scalars['Float']>
  exSystemIncome?: Maybe<Scalars['Float']>
  insuranceFee?: Maybe<Scalars['Float']>
  riskScore?: Maybe<Scalars['Float']>
  sellerCancelFee?: Maybe<Scalars['Float']>
  sellerTransactionFee?: Maybe<Scalars['Float']>
  totalTicketPrice?: Maybe<Scalars['Float']>
  usedPoints?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type StripeInvoiceVar_SampFields = {
  __typename?: 'StripeInvoiceVar_sampFields'
  acquiredPoints?: Maybe<Scalars['Float']>
  amount?: Maybe<Scalars['Float']>
  customerPaymentFee?: Maybe<Scalars['Float']>
  customerTransactionFee?: Maybe<Scalars['Float']>
  exReflectedAmount?: Maybe<Scalars['Float']>
  exRefundedAmount?: Maybe<Scalars['Float']>
  exSystemIncome?: Maybe<Scalars['Float']>
  insuranceFee?: Maybe<Scalars['Float']>
  riskScore?: Maybe<Scalars['Float']>
  sellerCancelFee?: Maybe<Scalars['Float']>
  sellerTransactionFee?: Maybe<Scalars['Float']>
  totalTicketPrice?: Maybe<Scalars['Float']>
  usedPoints?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type StripeInvoiceVarianceFields = {
  __typename?: 'StripeInvoiceVarianceFields'
  acquiredPoints?: Maybe<Scalars['Float']>
  amount?: Maybe<Scalars['Float']>
  customerPaymentFee?: Maybe<Scalars['Float']>
  customerTransactionFee?: Maybe<Scalars['Float']>
  exReflectedAmount?: Maybe<Scalars['Float']>
  exRefundedAmount?: Maybe<Scalars['Float']>
  exSystemIncome?: Maybe<Scalars['Float']>
  insuranceFee?: Maybe<Scalars['Float']>
  riskScore?: Maybe<Scalars['Float']>
  sellerCancelFee?: Maybe<Scalars['Float']>
  sellerTransactionFee?: Maybe<Scalars['Float']>
  totalTicketPrice?: Maybe<Scalars['Float']>
  usedPoints?: Maybe<Scalars['Float']>
}

export type StripeInvoice_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<StripeInvoice_Aggregate_Bool_Exp_Bool_And>
  bool_or?: InputMaybe<StripeInvoice_Aggregate_Bool_Exp_Bool_Or>
  count?: InputMaybe<StripeInvoice_Aggregate_Bool_Exp_Count>
}

export type StripeInvoice_Aggregate_Bool_Exp_Bool_And = {
  arguments: StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_And_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<StripeInvoiceBoolExp>
  predicate: BooleanComparisonExp
}

export type StripeInvoice_Aggregate_Bool_Exp_Bool_Or = {
  arguments: StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<StripeInvoiceBoolExp>
  predicate: BooleanComparisonExp
}

export type StripeInvoice_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<StripeInvoiceBoolExp>
  predicate: IntComparisonExp
}

/** order by avg() on columns of table "StripeInvoice" */
export type StripeInvoice_Avg_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
}

/** order by max() on columns of table "StripeInvoice" */
export type StripeInvoice_Max_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  capturedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  dealId?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  reflectedAt?: InputMaybe<OrderBy>
  refundedAt?: InputMaybe<OrderBy>
  releasedAt?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  stripeIntentUid?: InputMaybe<OrderBy>
  stripePaymentId?: InputMaybe<OrderBy>
  stripePaymentIntentId?: InputMaybe<OrderBy>
  stripeRefundUid?: InputMaybe<OrderBy>
  syncedAt?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "StripeInvoice" */
export type StripeInvoice_Min_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  capturedAt?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  dealId?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  reflectedAt?: InputMaybe<OrderBy>
  refundedAt?: InputMaybe<OrderBy>
  releasedAt?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  stripeIntentUid?: InputMaybe<OrderBy>
  stripePaymentId?: InputMaybe<OrderBy>
  stripePaymentIntentId?: InputMaybe<OrderBy>
  stripeRefundUid?: InputMaybe<OrderBy>
  syncedAt?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** select "StripeInvoice_aggregate_bool_exp_bool_and_arguments_columns" columns of table "StripeInvoice" */
export const StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {
  /** column name */
  Is3dsUsed: 'is3dsUsed',
  /** column name */
  IsDisputed: 'isDisputed',
  /** column name */
  IsValid: 'isValid',
  /** column name */
  StripeCaptured: 'stripeCaptured',
  /** column name */
  StripePaid: 'stripePaid',
  /** column name */
  StripeRefunded: 'stripeRefunded',
} as const

export type StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  typeof StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_And_Arguments_Columns[keyof typeof StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_And_Arguments_Columns]
/** select "StripeInvoice_aggregate_bool_exp_bool_or_arguments_columns" columns of table "StripeInvoice" */
export const StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {
  /** column name */
  Is3dsUsed: 'is3dsUsed',
  /** column name */
  IsDisputed: 'isDisputed',
  /** column name */
  IsValid: 'isValid',
  /** column name */
  StripeCaptured: 'stripeCaptured',
  /** column name */
  StripePaid: 'stripePaid',
  /** column name */
  StripeRefunded: 'stripeRefunded',
} as const

export type StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  typeof StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns[keyof typeof StripeInvoice_Select_Column_StripeInvoice_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns]
/** order by stddev() on columns of table "StripeInvoice" */
export type StripeInvoice_Stddev_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
}

/** order by stddev_pop() on columns of table "StripeInvoice" */
export type StripeInvoice_Stddev_Pop_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
}

/** order by stddev_samp() on columns of table "StripeInvoice" */
export type StripeInvoice_Stddev_Samp_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "StripeInvoice" */
export type StripeInvoice_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: StripeInvoice_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type StripeInvoice_StreamCursorValueInput = {
  acquiredPoints?: InputMaybe<Scalars['Int']>
  amount?: InputMaybe<Scalars['Int']>
  capturedAt?: InputMaybe<Scalars['timestamp']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  customerPaymentFee?: InputMaybe<Scalars['Int']>
  customerTransactionFee?: InputMaybe<Scalars['Int']>
  dealId?: InputMaybe<Scalars['uuid']>
  exReflectedAmount?: InputMaybe<Scalars['Int']>
  exRefundedAmount?: InputMaybe<Scalars['Int']>
  exSystemIncome?: InputMaybe<Scalars['Int']>
  id?: InputMaybe<Scalars['uuid']>
  insuranceFee?: InputMaybe<Scalars['Int']>
  is3dsUsed?: InputMaybe<Scalars['Boolean']>
  isDisputed?: InputMaybe<Scalars['Boolean']>
  isValid?: InputMaybe<Scalars['Boolean']>
  reflectedAt?: InputMaybe<Scalars['timestamp']>
  refundedAt?: InputMaybe<Scalars['timestamp']>
  releasedAt?: InputMaybe<Scalars['timestamp']>
  riskScore?: InputMaybe<Scalars['Int']>
  sellerCancelFee?: InputMaybe<Scalars['Int']>
  sellerTransactionFee?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<Scalars['StripeInvoiceStatus']>
  stripeCaptured?: InputMaybe<Scalars['Boolean']>
  stripeIntentUid?: InputMaybe<Scalars['String']>
  stripePaid?: InputMaybe<Scalars['Boolean']>
  stripePaymentId?: InputMaybe<Scalars['uuid']>
  stripePaymentIntentId?: InputMaybe<Scalars['String']>
  stripeRefundUid?: InputMaybe<Scalars['String']>
  stripeRefunded?: InputMaybe<Scalars['Boolean']>
  syncedAt?: InputMaybe<Scalars['timestamp']>
  totalTicketPrice?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  usedPoints?: InputMaybe<Scalars['Int']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** order by sum() on columns of table "StripeInvoice" */
export type StripeInvoice_Sum_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
}

/** order by var_pop() on columns of table "StripeInvoice" */
export type StripeInvoice_Var_Pop_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
}

/** order by var_samp() on columns of table "StripeInvoice" */
export type StripeInvoice_Var_Samp_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
}

/** order by variance() on columns of table "StripeInvoice" */
export type StripeInvoice_Variance_Order_By = {
  acquiredPoints?: InputMaybe<OrderBy>
  amount?: InputMaybe<OrderBy>
  customerPaymentFee?: InputMaybe<OrderBy>
  customerTransactionFee?: InputMaybe<OrderBy>
  exReflectedAmount?: InputMaybe<OrderBy>
  exRefundedAmount?: InputMaybe<OrderBy>
  exSystemIncome?: InputMaybe<OrderBy>
  insuranceFee?: InputMaybe<OrderBy>
  riskScore?: InputMaybe<OrderBy>
  sellerCancelFee?: InputMaybe<OrderBy>
  sellerTransactionFee?: InputMaybe<OrderBy>
  totalTicketPrice?: InputMaybe<OrderBy>
  usedPoints?: InputMaybe<OrderBy>
}

/** columns and relationships of "StripePayment" */
export type StripePayment = {
  __typename?: 'StripePayment'
  brand: Scalars['String']
  country: Scalars['String']
  createdAt: Scalars['timestamptz']
  currency: Scalars['String']
  expMonth: Scalars['String']
  expYear: Scalars['String']
  fingerprint?: Maybe<Scalars['String']>
  funding: Scalars['String']
  id: Scalars['uuid']
  last4: Scalars['String']
  status: Scalars['StripePaymentStatus']
  stripeCustomerId: Scalars['String']
  /** An array relationship */
  stripeInvoices: Array<StripeInvoice>
  /** An aggregate relationship */
  stripeInvoicesAggregate: StripeInvoiceAggregate
  stripePaymentMethodId: Scalars['String']
  updatedAt: Scalars['timestamptz']
  /** An object relationship */
  user: User
  userId: Scalars['uuid']
}

/** columns and relationships of "StripePayment" */
export type StripePaymentStripeInvoicesArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

/** columns and relationships of "StripePayment" */
export type StripePaymentStripeInvoicesAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

/** aggregated selection of "StripePayment" */
export type StripePaymentAggregate = {
  __typename?: 'StripePaymentAggregate'
  aggregate?: Maybe<StripePaymentAggregateFields>
  nodes: Array<StripePayment>
}

/** aggregate fields of "StripePayment" */
export type StripePaymentAggregateFields = {
  __typename?: 'StripePaymentAggregateFields'
  count: Scalars['Int']
  max?: Maybe<StripePaymentMaxFields>
  min?: Maybe<StripePaymentMinFields>
}

/** aggregate fields of "StripePayment" */
export type StripePaymentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<StripePaymentSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "StripePayment" */
export type StripePaymentAggregateOrderBy = {
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<StripePayment_Max_Order_By>
  min?: InputMaybe<StripePayment_Min_Order_By>
}

/** input type for inserting array relation for remote table "StripePayment" */
export type StripePaymentArrRelInsertInput = {
  data: Array<StripePaymentInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<StripePaymentOnConflict>
}

/** Boolean expression to filter rows from the table "StripePayment". All fields are combined with a logical 'AND'. */
export type StripePaymentBoolExp = {
  _and?: InputMaybe<Array<StripePaymentBoolExp>>
  _not?: InputMaybe<StripePaymentBoolExp>
  _or?: InputMaybe<Array<StripePaymentBoolExp>>
  brand?: InputMaybe<StringComparisonExp>
  country?: InputMaybe<StringComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  currency?: InputMaybe<StringComparisonExp>
  expMonth?: InputMaybe<StringComparisonExp>
  expYear?: InputMaybe<StringComparisonExp>
  fingerprint?: InputMaybe<StringComparisonExp>
  funding?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  last4?: InputMaybe<StringComparisonExp>
  status?: InputMaybe<StripePaymentStatusComparisonExp>
  stripeCustomerId?: InputMaybe<StringComparisonExp>
  stripeInvoices?: InputMaybe<StripeInvoiceBoolExp>
  stripeInvoices_aggregate?: InputMaybe<StripeInvoice_Aggregate_Bool_Exp>
  stripePaymentMethodId?: InputMaybe<StringComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
  user?: InputMaybe<UserBoolExp>
  userId?: InputMaybe<UuidComparisonExp>
}

/** unique or primary key constraints on table "StripePayment" */
export const StripePaymentConstraint = {
  /** unique or primary key constraint on columns "id" */
  StripePaymentPkey: 'StripePayment_pkey',
  /** unique or primary key constraint on columns "stripeCustomerId" */
  StripePaymentStripeCustomerIdKey: 'StripePayment_stripeCustomerId_key',
  /** unique or primary key constraint on columns "stripePaymentMethodId" */
  StripePaymentStripePaymentMethodIdKey: 'StripePayment_stripePaymentMethodId_key',
} as const

export type StripePaymentConstraint = typeof StripePaymentConstraint[keyof typeof StripePaymentConstraint]
/** input type for inserting data into table "StripePayment" */
export type StripePaymentInsertInput = {
  brand?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  currency?: InputMaybe<Scalars['String']>
  expMonth?: InputMaybe<Scalars['String']>
  expYear?: InputMaybe<Scalars['String']>
  fingerprint?: InputMaybe<Scalars['String']>
  funding?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  last4?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['StripePaymentStatus']>
  stripeCustomerId?: InputMaybe<Scalars['String']>
  stripeInvoices?: InputMaybe<StripeInvoiceArrRelInsertInput>
  stripePaymentMethodId?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  user?: InputMaybe<UserObjRelInsertInput>
  userId?: InputMaybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type StripePaymentMaxFields = {
  __typename?: 'StripePaymentMaxFields'
  brand?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  currency?: Maybe<Scalars['String']>
  expMonth?: Maybe<Scalars['String']>
  expYear?: Maybe<Scalars['String']>
  fingerprint?: Maybe<Scalars['String']>
  funding?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  last4?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['StripePaymentStatus']>
  stripeCustomerId?: Maybe<Scalars['String']>
  stripePaymentMethodId?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userId?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type StripePaymentMinFields = {
  __typename?: 'StripePaymentMinFields'
  brand?: Maybe<Scalars['String']>
  country?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['timestamptz']>
  currency?: Maybe<Scalars['String']>
  expMonth?: Maybe<Scalars['String']>
  expYear?: Maybe<Scalars['String']>
  fingerprint?: Maybe<Scalars['String']>
  funding?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  last4?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['StripePaymentStatus']>
  stripeCustomerId?: Maybe<Scalars['String']>
  stripePaymentMethodId?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
  userId?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "StripePayment" */
export type StripePaymentMutationResponse = {
  __typename?: 'StripePaymentMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<StripePayment>
}

/** input type for inserting object relation for remote table "StripePayment" */
export type StripePaymentObjRelInsertInput = {
  data: StripePaymentInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<StripePaymentOnConflict>
}

/** on_conflict condition type for table "StripePayment" */
export type StripePaymentOnConflict = {
  constraint: StripePaymentConstraint
  update_columns?: Array<StripePaymentUpdateColumn>
  where?: InputMaybe<StripePaymentBoolExp>
}

/** Ordering options when selecting data from "StripePayment". */
export type StripePaymentOrderBy = {
  brand?: InputMaybe<OrderBy>
  country?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  expMonth?: InputMaybe<OrderBy>
  expYear?: InputMaybe<OrderBy>
  fingerprint?: InputMaybe<OrderBy>
  funding?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  last4?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  stripeCustomerId?: InputMaybe<OrderBy>
  stripeInvoicesAggregate?: InputMaybe<StripeInvoiceAggregateOrderBy>
  stripePaymentMethodId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  user?: InputMaybe<UserOrderBy>
  userId?: InputMaybe<OrderBy>
}

/** primary key columns input for table: StripePayment */
export type StripePaymentPkColumnsInput = {
  id: Scalars['uuid']
}

export type StripePaymentResponseDto = {
  __typename?: 'StripePaymentResponseDto'
  brand: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  expMonth: Scalars['String']
  expYear: Scalars['String']
  id: Scalars['String']
  last4: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  userId: Scalars['String']
}

/** select columns of table "StripePayment" */
export const StripePaymentSelectColumn = {
  /** column name */
  Brand: 'brand',
  /** column name */
  Country: 'country',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Currency: 'currency',
  /** column name */
  ExpMonth: 'expMonth',
  /** column name */
  ExpYear: 'expYear',
  /** column name */
  Fingerprint: 'fingerprint',
  /** column name */
  Funding: 'funding',
  /** column name */
  Id: 'id',
  /** column name */
  Last4: 'last4',
  /** column name */
  Status: 'status',
  /** column name */
  StripeCustomerId: 'stripeCustomerId',
  /** column name */
  StripePaymentMethodId: 'stripePaymentMethodId',
  /** column name */
  UpdatedAt: 'updatedAt',
  /** column name */
  UserId: 'userId',
} as const

export type StripePaymentSelectColumn = typeof StripePaymentSelectColumn[keyof typeof StripePaymentSelectColumn]
/** input type for updating data in table "StripePayment" */
export type StripePaymentSetInput = {
  brand?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  currency?: InputMaybe<Scalars['String']>
  expMonth?: InputMaybe<Scalars['String']>
  expYear?: InputMaybe<Scalars['String']>
  fingerprint?: InputMaybe<Scalars['String']>
  funding?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  last4?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['StripePaymentStatus']>
  stripeCustomerId?: InputMaybe<Scalars['String']>
  stripePaymentMethodId?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** Boolean expression to compare columns of type "StripePaymentStatus". All fields are combined with logical 'AND'. */
export type StripePaymentStatusComparisonExp = {
  _eq?: InputMaybe<Scalars['StripePaymentStatus']>
  _gt?: InputMaybe<Scalars['StripePaymentStatus']>
  _gte?: InputMaybe<Scalars['StripePaymentStatus']>
  _in?: InputMaybe<Array<Scalars['StripePaymentStatus']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['StripePaymentStatus']>
  _lte?: InputMaybe<Scalars['StripePaymentStatus']>
  _neq?: InputMaybe<Scalars['StripePaymentStatus']>
  _nin?: InputMaybe<Array<Scalars['StripePaymentStatus']>>
}

/** update columns of table "StripePayment" */
export const StripePaymentUpdateColumn = {
  /** column name */
  Brand: 'brand',
  /** column name */
  Country: 'country',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Currency: 'currency',
  /** column name */
  ExpMonth: 'expMonth',
  /** column name */
  ExpYear: 'expYear',
  /** column name */
  Fingerprint: 'fingerprint',
  /** column name */
  Funding: 'funding',
  /** column name */
  Id: 'id',
  /** column name */
  Last4: 'last4',
  /** column name */
  Status: 'status',
  /** column name */
  StripeCustomerId: 'stripeCustomerId',
  /** column name */
  StripePaymentMethodId: 'stripePaymentMethodId',
  /** column name */
  UpdatedAt: 'updatedAt',
  /** column name */
  UserId: 'userId',
} as const

export type StripePaymentUpdateColumn = typeof StripePaymentUpdateColumn[keyof typeof StripePaymentUpdateColumn]
export type StripePaymentUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripePaymentSetInput>
  where: StripePaymentBoolExp
}

export type StripePayment_Aggregate_Bool_Exp = {
  count?: InputMaybe<StripePayment_Aggregate_Bool_Exp_Count>
}

export type StripePayment_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<StripePaymentSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<StripePaymentBoolExp>
  predicate: IntComparisonExp
}

/** order by max() on columns of table "StripePayment" */
export type StripePayment_Max_Order_By = {
  brand?: InputMaybe<OrderBy>
  country?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  expMonth?: InputMaybe<OrderBy>
  expYear?: InputMaybe<OrderBy>
  fingerprint?: InputMaybe<OrderBy>
  funding?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  last4?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  stripeCustomerId?: InputMaybe<OrderBy>
  stripePaymentMethodId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "StripePayment" */
export type StripePayment_Min_Order_By = {
  brand?: InputMaybe<OrderBy>
  country?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  currency?: InputMaybe<OrderBy>
  expMonth?: InputMaybe<OrderBy>
  expYear?: InputMaybe<OrderBy>
  fingerprint?: InputMaybe<OrderBy>
  funding?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  last4?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  stripeCustomerId?: InputMaybe<OrderBy>
  stripePaymentMethodId?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
  userId?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "StripePayment" */
export type StripePayment_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: StripePayment_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type StripePayment_StreamCursorValueInput = {
  brand?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  currency?: InputMaybe<Scalars['String']>
  expMonth?: InputMaybe<Scalars['String']>
  expYear?: InputMaybe<Scalars['String']>
  fingerprint?: InputMaybe<Scalars['String']>
  funding?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  last4?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['StripePaymentStatus']>
  stripeCustomerId?: InputMaybe<Scalars['String']>
  stripePaymentMethodId?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
  userId?: InputMaybe<Scalars['uuid']>
}

/** columns and relationships of "Ticket" */
export type Ticket = {
  __typename?: 'Ticket'
  cellsCount: Scalars['Int']
  createdAt: Scalars['timestamptz']
  /** An array relationship */
  deals: Array<Deal>
  /** An aggregate relationship */
  dealsAggregate: DealAggregate
  description: Scalars['String']
  /** An object relationship */
  event: Event
  eventId: Scalars['uuid']
  id: Scalars['uuid']
  priceForCell: Scalars['Int']
  /** An object relationship */
  seller: User
  sellerId: Scalars['uuid']
  status: Scalars['TicketStatus']
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "Ticket" */
export type TicketDealsArgs = {
  distinctOn?: InputMaybe<Array<DealSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy>>
  where?: InputMaybe<DealBoolExp>
}

/** columns and relationships of "Ticket" */
export type TicketDealsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DealSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy>>
  where?: InputMaybe<DealBoolExp>
}

/** aggregated selection of "Ticket" */
export type TicketAggregate = {
  __typename?: 'TicketAggregate'
  aggregate?: Maybe<TicketAggregateFields>
  nodes: Array<Ticket>
}

/** aggregate fields of "Ticket" */
export type TicketAggregateFields = {
  __typename?: 'TicketAggregateFields'
  avg?: Maybe<TicketAvgFields>
  count: Scalars['Int']
  max?: Maybe<TicketMaxFields>
  min?: Maybe<TicketMinFields>
  stddev?: Maybe<TicketStddevFields>
  stddevPop?: Maybe<TicketStddev_PopFields>
  stddevSamp?: Maybe<TicketStddev_SampFields>
  sum?: Maybe<TicketSumFields>
  varPop?: Maybe<TicketVar_PopFields>
  varSamp?: Maybe<TicketVar_SampFields>
  variance?: Maybe<TicketVarianceFields>
}

/** aggregate fields of "Ticket" */
export type TicketAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TicketSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "Ticket" */
export type TicketAggregateOrderBy = {
  avg?: InputMaybe<Ticket_Avg_Order_By>
  count?: InputMaybe<OrderBy>
  max?: InputMaybe<Ticket_Max_Order_By>
  min?: InputMaybe<Ticket_Min_Order_By>
  stddev?: InputMaybe<Ticket_Stddev_Order_By>
  stddev_pop?: InputMaybe<Ticket_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Ticket_Stddev_Samp_Order_By>
  sum?: InputMaybe<Ticket_Sum_Order_By>
  var_pop?: InputMaybe<Ticket_Var_Pop_Order_By>
  var_samp?: InputMaybe<Ticket_Var_Samp_Order_By>
  variance?: InputMaybe<Ticket_Variance_Order_By>
}

/** input type for inserting array relation for remote table "Ticket" */
export type TicketArrRelInsertInput = {
  data: Array<TicketInsertInput>
  /** upsert condition */
  onConflict?: InputMaybe<TicketOnConflict>
}

/** aggregate avg on columns */
export type TicketAvgFields = {
  __typename?: 'TicketAvgFields'
  cellsCount?: Maybe<Scalars['Float']>
  priceForCell?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "Ticket". All fields are combined with a logical 'AND'. */
export type TicketBoolExp = {
  _and?: InputMaybe<Array<TicketBoolExp>>
  _not?: InputMaybe<TicketBoolExp>
  _or?: InputMaybe<Array<TicketBoolExp>>
  cellsCount?: InputMaybe<IntComparisonExp>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  deals?: InputMaybe<DealBoolExp>
  deals_aggregate?: InputMaybe<Deal_Aggregate_Bool_Exp>
  description?: InputMaybe<StringComparisonExp>
  event?: InputMaybe<EventBoolExp>
  eventId?: InputMaybe<UuidComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  priceForCell?: InputMaybe<IntComparisonExp>
  seller?: InputMaybe<UserBoolExp>
  sellerId?: InputMaybe<UuidComparisonExp>
  status?: InputMaybe<TicketStatusComparisonExp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "Ticket" */
export const TicketConstraint = {
  /** unique or primary key constraint on columns "id" */
  TicketPkey: 'Ticket_pkey',
} as const

export type TicketConstraint = typeof TicketConstraint[keyof typeof TicketConstraint]
/** input type for incrementing numeric columns in table "Ticket" */
export type TicketIncInput = {
  cellsCount?: InputMaybe<Scalars['Int']>
  priceForCell?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "Ticket" */
export type TicketInsertInput = {
  cellsCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  deals?: InputMaybe<DealArrRelInsertInput>
  description?: InputMaybe<Scalars['String']>
  event?: InputMaybe<EventObjRelInsertInput>
  eventId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  priceForCell?: InputMaybe<Scalars['Int']>
  seller?: InputMaybe<UserObjRelInsertInput>
  sellerId?: InputMaybe<Scalars['uuid']>
  status?: InputMaybe<Scalars['TicketStatus']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type TicketMaxFields = {
  __typename?: 'TicketMaxFields'
  cellsCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  priceForCell?: Maybe<Scalars['Int']>
  sellerId?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['TicketStatus']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type TicketMinFields = {
  __typename?: 'TicketMinFields'
  cellsCount?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['timestamptz']>
  description?: Maybe<Scalars['String']>
  eventId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  priceForCell?: Maybe<Scalars['Int']>
  sellerId?: Maybe<Scalars['uuid']>
  status?: Maybe<Scalars['TicketStatus']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "Ticket" */
export type TicketMutationResponse = {
  __typename?: 'TicketMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Ticket>
}

/** input type for inserting object relation for remote table "Ticket" */
export type TicketObjRelInsertInput = {
  data: TicketInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<TicketOnConflict>
}

/** on_conflict condition type for table "Ticket" */
export type TicketOnConflict = {
  constraint: TicketConstraint
  update_columns?: Array<TicketUpdateColumn>
  where?: InputMaybe<TicketBoolExp>
}

/** Ordering options when selecting data from "Ticket". */
export type TicketOrderBy = {
  cellsCount?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  dealsAggregate?: InputMaybe<DealAggregateOrderBy>
  description?: InputMaybe<OrderBy>
  event?: InputMaybe<EventOrderBy>
  eventId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
  seller?: InputMaybe<UserOrderBy>
  sellerId?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: Ticket */
export type TicketPkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "Ticket" */
export const TicketSelectColumn = {
  /** column name */
  CellsCount: 'cellsCount',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Description: 'description',
  /** column name */
  EventId: 'eventId',
  /** column name */
  Id: 'id',
  /** column name */
  PriceForCell: 'priceForCell',
  /** column name */
  SellerId: 'sellerId',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const

export type TicketSelectColumn = typeof TicketSelectColumn[keyof typeof TicketSelectColumn]
/** input type for updating data in table "Ticket" */
export type TicketSetInput = {
  cellsCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  eventId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  priceForCell?: InputMaybe<Scalars['Int']>
  sellerId?: InputMaybe<Scalars['uuid']>
  status?: InputMaybe<Scalars['TicketStatus']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** Boolean expression to compare columns of type "TicketStatus". All fields are combined with logical 'AND'. */
export type TicketStatusComparisonExp = {
  _eq?: InputMaybe<Scalars['TicketStatus']>
  _gt?: InputMaybe<Scalars['TicketStatus']>
  _gte?: InputMaybe<Scalars['TicketStatus']>
  _in?: InputMaybe<Array<Scalars['TicketStatus']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['TicketStatus']>
  _lte?: InputMaybe<Scalars['TicketStatus']>
  _neq?: InputMaybe<Scalars['TicketStatus']>
  _nin?: InputMaybe<Array<Scalars['TicketStatus']>>
}

/** aggregate stddev on columns */
export type TicketStddevFields = {
  __typename?: 'TicketStddevFields'
  cellsCount?: Maybe<Scalars['Float']>
  priceForCell?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type TicketStddev_PopFields = {
  __typename?: 'TicketStddev_popFields'
  cellsCount?: Maybe<Scalars['Float']>
  priceForCell?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type TicketStddev_SampFields = {
  __typename?: 'TicketStddev_sampFields'
  cellsCount?: Maybe<Scalars['Float']>
  priceForCell?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type TicketSumFields = {
  __typename?: 'TicketSumFields'
  cellsCount?: Maybe<Scalars['Int']>
  priceForCell?: Maybe<Scalars['Int']>
}

/** update columns of table "Ticket" */
export const TicketUpdateColumn = {
  /** column name */
  CellsCount: 'cellsCount',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Description: 'description',
  /** column name */
  EventId: 'eventId',
  /** column name */
  Id: 'id',
  /** column name */
  PriceForCell: 'priceForCell',
  /** column name */
  SellerId: 'sellerId',
  /** column name */
  Status: 'status',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const

export type TicketUpdateColumn = typeof TicketUpdateColumn[keyof typeof TicketUpdateColumn]
export type TicketUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TicketIncInput>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TicketSetInput>
  where: TicketBoolExp
}

/** aggregate var_pop on columns */
export type TicketVar_PopFields = {
  __typename?: 'TicketVar_popFields'
  cellsCount?: Maybe<Scalars['Float']>
  priceForCell?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type TicketVar_SampFields = {
  __typename?: 'TicketVar_sampFields'
  cellsCount?: Maybe<Scalars['Float']>
  priceForCell?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type TicketVarianceFields = {
  __typename?: 'TicketVarianceFields'
  cellsCount?: Maybe<Scalars['Float']>
  priceForCell?: Maybe<Scalars['Float']>
}

export type Ticket_Aggregate_Bool_Exp = {
  count?: InputMaybe<Ticket_Aggregate_Bool_Exp_Count>
}

export type Ticket_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<TicketSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<TicketBoolExp>
  predicate: IntComparisonExp
}

/** order by avg() on columns of table "Ticket" */
export type Ticket_Avg_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
}

/** order by max() on columns of table "Ticket" */
export type Ticket_Max_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  eventId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
  sellerId?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** order by min() on columns of table "Ticket" */
export type Ticket_Min_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  createdAt?: InputMaybe<OrderBy>
  description?: InputMaybe<OrderBy>
  eventId?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
  sellerId?: InputMaybe<OrderBy>
  status?: InputMaybe<OrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** order by stddev() on columns of table "Ticket" */
export type Ticket_Stddev_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
}

/** order by stddev_pop() on columns of table "Ticket" */
export type Ticket_Stddev_Pop_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
}

/** order by stddev_samp() on columns of table "Ticket" */
export type Ticket_Stddev_Samp_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
}

/** Streaming cursor of the table "Ticket" */
export type Ticket_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Ticket_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type Ticket_StreamCursorValueInput = {
  cellsCount?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['timestamptz']>
  description?: InputMaybe<Scalars['String']>
  eventId?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  priceForCell?: InputMaybe<Scalars['Int']>
  sellerId?: InputMaybe<Scalars['uuid']>
  status?: InputMaybe<Scalars['TicketStatus']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** order by sum() on columns of table "Ticket" */
export type Ticket_Sum_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
}

/** order by var_pop() on columns of table "Ticket" */
export type Ticket_Var_Pop_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
}

/** order by var_samp() on columns of table "Ticket" */
export type Ticket_Var_Samp_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
}

/** order by variance() on columns of table "Ticket" */
export type Ticket_Variance_Order_By = {
  cellsCount?: InputMaybe<OrderBy>
  priceForCell?: InputMaybe<OrderBy>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']>
  _gt?: InputMaybe<Scalars['timestamp']>
  _gte?: InputMaybe<Scalars['timestamp']>
  _in?: InputMaybe<Array<Scalars['timestamp']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamp']>
  _lte?: InputMaybe<Scalars['timestamp']>
  _neq?: InputMaybe<Scalars['timestamp']>
  _nin?: InputMaybe<Array<Scalars['timestamp']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>
  _gt?: InputMaybe<Scalars['timestamptz']>
  _gte?: InputMaybe<Scalars['timestamptz']>
  _in?: InputMaybe<Array<Scalars['timestamptz']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['timestamptz']>
  _lte?: InputMaybe<Scalars['timestamptz']>
  _neq?: InputMaybe<Scalars['timestamptz']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User'
  createdAt: Scalars['timestamptz']
  /** An array relationship */
  customerDeals: Array<Deal>
  /** An aggregate relationship */
  customerDealsAggregate: DealAggregate
  email: Scalars['String']
  id: Scalars['uuid']
  password: Scalars['String']
  /** An array relationship */
  stripeInvoices: Array<StripeInvoice>
  /** An aggregate relationship */
  stripeInvoicesAggregate: StripeInvoiceAggregate
  /** An array relationship */
  stripePayments: Array<StripePayment>
  /** An aggregate relationship */
  stripePaymentsAggregate: StripePaymentAggregate
  /** An array relationship */
  tickets: Array<Ticket>
  /** An aggregate relationship */
  ticketsAggregate: TicketAggregate
  updatedAt: Scalars['timestamptz']
}

/** columns and relationships of "User" */
export type UserCustomerDealsArgs = {
  distinctOn?: InputMaybe<Array<DealSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy>>
  where?: InputMaybe<DealBoolExp>
}

/** columns and relationships of "User" */
export type UserCustomerDealsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DealSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy>>
  where?: InputMaybe<DealBoolExp>
}

/** columns and relationships of "User" */
export type UserStripeInvoicesArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

/** columns and relationships of "User" */
export type UserStripeInvoicesAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

/** columns and relationships of "User" */
export type UserStripePaymentsArgs = {
  distinctOn?: InputMaybe<Array<StripePaymentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripePaymentOrderBy>>
  where?: InputMaybe<StripePaymentBoolExp>
}

/** columns and relationships of "User" */
export type UserStripePaymentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripePaymentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripePaymentOrderBy>>
  where?: InputMaybe<StripePaymentBoolExp>
}

/** columns and relationships of "User" */
export type UserTicketsArgs = {
  distinctOn?: InputMaybe<Array<TicketSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy>>
  where?: InputMaybe<TicketBoolExp>
}

/** columns and relationships of "User" */
export type UserTicketsAggregateArgs = {
  distinctOn?: InputMaybe<Array<TicketSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy>>
  where?: InputMaybe<TicketBoolExp>
}

/** aggregated selection of "User" */
export type UserAggregate = {
  __typename?: 'UserAggregate'
  aggregate?: Maybe<UserAggregateFields>
  nodes: Array<User>
}

/** aggregate fields of "User" */
export type UserAggregateFields = {
  __typename?: 'UserAggregateFields'
  count: Scalars['Int']
  max?: Maybe<UserMaxFields>
  min?: Maybe<UserMinFields>
}

/** aggregate fields of "User" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>
  _not?: InputMaybe<UserBoolExp>
  _or?: InputMaybe<Array<UserBoolExp>>
  createdAt?: InputMaybe<TimestamptzComparisonExp>
  customerDeals?: InputMaybe<DealBoolExp>
  customerDeals_aggregate?: InputMaybe<Deal_Aggregate_Bool_Exp>
  email?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  password?: InputMaybe<StringComparisonExp>
  stripeInvoices?: InputMaybe<StripeInvoiceBoolExp>
  stripeInvoices_aggregate?: InputMaybe<StripeInvoice_Aggregate_Bool_Exp>
  stripePayments?: InputMaybe<StripePaymentBoolExp>
  stripePayments_aggregate?: InputMaybe<StripePayment_Aggregate_Bool_Exp>
  tickets?: InputMaybe<TicketBoolExp>
  tickets_aggregate?: InputMaybe<Ticket_Aggregate_Bool_Exp>
  updatedAt?: InputMaybe<TimestamptzComparisonExp>
}

/** unique or primary key constraints on table "User" */
export const UserConstraint = {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey: 'User_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey: 'User_pkey',
} as const

export type UserConstraint = typeof UserConstraint[keyof typeof UserConstraint]
/** input type for inserting data into table "User" */
export type UserInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  customerDeals?: InputMaybe<DealArrRelInsertInput>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  password?: InputMaybe<Scalars['String']>
  stripeInvoices?: InputMaybe<StripeInvoiceArrRelInsertInput>
  stripePayments?: InputMaybe<StripePaymentArrRelInsertInput>
  tickets?: InputMaybe<TicketArrRelInsertInput>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'UserMaxFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  password?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'UserMinFields'
  createdAt?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  password?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "User" */
export type UserMutationResponse = {
  __typename?: 'UserMutationResponse'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User>
}

/** input type for inserting object relation for remote table "User" */
export type UserObjRelInsertInput = {
  data: UserInsertInput
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>
}

/** on_conflict condition type for table "User" */
export type UserOnConflict = {
  constraint: UserConstraint
  update_columns?: Array<UserUpdateColumn>
  where?: InputMaybe<UserBoolExp>
}

/** Ordering options when selecting data from "User". */
export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>
  customerDealsAggregate?: InputMaybe<DealAggregateOrderBy>
  email?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  password?: InputMaybe<OrderBy>
  stripeInvoicesAggregate?: InputMaybe<StripeInvoiceAggregateOrderBy>
  stripePaymentsAggregate?: InputMaybe<StripePaymentAggregateOrderBy>
  ticketsAggregate?: InputMaybe<TicketAggregateOrderBy>
  updatedAt?: InputMaybe<OrderBy>
}

/** primary key columns input for table: User */
export type UserPkColumnsInput = {
  id: Scalars['uuid']
}

/** select columns of table "User" */
export const UserSelectColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Email: 'email',
  /** column name */
  Id: 'id',
  /** column name */
  Password: 'password',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const

export type UserSelectColumn = typeof UserSelectColumn[keyof typeof UserSelectColumn]
/** input type for updating data in table "User" */
export type UserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  password?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

export type UserSignInInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type UserSignInResponse = {
  __typename?: 'UserSignInResponse'
  jwtToken: Scalars['String']
}

export type UserSignUpInput = {
  email: Scalars['String']
  password: Scalars['String']
}

/** update columns of table "User" */
export const UserUpdateColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Email: 'email',
  /** column name */
  Id: 'id',
  /** column name */
  Password: 'password',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const

export type UserUpdateColumn = typeof UserUpdateColumn[keyof typeof UserUpdateColumn]
export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>
  where: UserBoolExp
}

/** Streaming cursor of the table "User" */
export type User_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: User_StreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type User_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  password?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['timestamptz']>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _isNull?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export type Hasura_Mutation_Frontend = {
  __typename?: 'hasura_mutation_frontend'
  /** delete data from the table: "Deal" */
  deleteDeal?: Maybe<DealMutationResponse>
  /** delete single row from the table: "Deal" */
  deleteDealByPk?: Maybe<Deal>
  /** delete data from the table: "Event" */
  deleteEvent?: Maybe<EventMutationResponse>
  /** delete single row from the table: "Event" */
  deleteEventByPk?: Maybe<Event>
  /** delete data from the table: "FavoriteEvent" */
  deleteFavoriteEvent?: Maybe<FavoriteEventMutationResponse>
  /** delete single row from the table: "FavoriteEvent" */
  deleteFavoriteEventByPk?: Maybe<FavoriteEvent>
  /** delete data from the table: "StripeInvoice" */
  deleteStripeInvoice?: Maybe<StripeInvoiceMutationResponse>
  /** delete single row from the table: "StripeInvoice" */
  deleteStripeInvoiceByPk?: Maybe<StripeInvoice>
  /** delete data from the table: "StripePayment" */
  deleteStripePayment?: Maybe<StripePaymentMutationResponse>
  /** delete single row from the table: "StripePayment" */
  deleteStripePaymentByPk?: Maybe<StripePayment>
  /** delete data from the table: "Ticket" */
  deleteTicket?: Maybe<TicketMutationResponse>
  /** delete single row from the table: "Ticket" */
  deleteTicketByPk?: Maybe<Ticket>
  /** delete data from the table: "User" */
  deleteUser?: Maybe<UserMutationResponse>
  /** delete single row from the table: "User" */
  deleteUserByPk?: Maybe<User>
  /** insert data into the table: "Deal" */
  insertDeal?: Maybe<DealMutationResponse>
  /** insert a single row into the table: "Deal" */
  insertDealOne?: Maybe<Deal>
  /** insert data into the table: "Event" */
  insertEvent?: Maybe<EventMutationResponse>
  /** insert a single row into the table: "Event" */
  insertEventOne?: Maybe<Event>
  /** insert data into the table: "FavoriteEvent" */
  insertFavoriteEvent?: Maybe<FavoriteEventMutationResponse>
  /** insert a single row into the table: "FavoriteEvent" */
  insertFavoriteEventOne?: Maybe<FavoriteEvent>
  /** insert data into the table: "StripeInvoice" */
  insertStripeInvoice?: Maybe<StripeInvoiceMutationResponse>
  /** insert a single row into the table: "StripeInvoice" */
  insertStripeInvoiceOne?: Maybe<StripeInvoice>
  /** insert data into the table: "StripePayment" */
  insertStripePayment?: Maybe<StripePaymentMutationResponse>
  /** insert a single row into the table: "StripePayment" */
  insertStripePaymentOne?: Maybe<StripePayment>
  /** insert data into the table: "Ticket" */
  insertTicket?: Maybe<TicketMutationResponse>
  /** insert a single row into the table: "Ticket" */
  insertTicketOne?: Maybe<Ticket>
  /** insert data into the table: "User" */
  insertUser?: Maybe<UserMutationResponse>
  /** insert a single row into the table: "User" */
  insertUserOne?: Maybe<User>
  /** update data of the table: "Deal" */
  updateDeal?: Maybe<DealMutationResponse>
  /** update single row of the table: "Deal" */
  updateDealByPk?: Maybe<Deal>
  /** update multiples rows of table: "Deal" */
  updateDealMany?: Maybe<Array<Maybe<DealMutationResponse>>>
  /** update data of the table: "Event" */
  updateEvent?: Maybe<EventMutationResponse>
  /** update single row of the table: "Event" */
  updateEventByPk?: Maybe<Event>
  /** update multiples rows of table: "Event" */
  updateEventMany?: Maybe<Array<Maybe<EventMutationResponse>>>
  /** update data of the table: "FavoriteEvent" */
  updateFavoriteEvent?: Maybe<FavoriteEventMutationResponse>
  /** update single row of the table: "FavoriteEvent" */
  updateFavoriteEventByPk?: Maybe<FavoriteEvent>
  /** update multiples rows of table: "FavoriteEvent" */
  updateFavoriteEventMany?: Maybe<Array<Maybe<FavoriteEventMutationResponse>>>
  /** update data of the table: "StripeInvoice" */
  updateStripeInvoice?: Maybe<StripeInvoiceMutationResponse>
  /** update single row of the table: "StripeInvoice" */
  updateStripeInvoiceByPk?: Maybe<StripeInvoice>
  /** update multiples rows of table: "StripeInvoice" */
  updateStripeInvoiceMany?: Maybe<Array<Maybe<StripeInvoiceMutationResponse>>>
  /** update data of the table: "StripePayment" */
  updateStripePayment?: Maybe<StripePaymentMutationResponse>
  /** update single row of the table: "StripePayment" */
  updateStripePaymentByPk?: Maybe<StripePayment>
  /** update multiples rows of table: "StripePayment" */
  updateStripePaymentMany?: Maybe<Array<Maybe<StripePaymentMutationResponse>>>
  /** update data of the table: "Ticket" */
  updateTicket?: Maybe<TicketMutationResponse>
  /** update single row of the table: "Ticket" */
  updateTicketByPk?: Maybe<Ticket>
  /** update multiples rows of table: "Ticket" */
  updateTicketMany?: Maybe<Array<Maybe<TicketMutationResponse>>>
  /** update data of the table: "User" */
  updateUser?: Maybe<UserMutationResponse>
  /** update single row of the table: "User" */
  updateUserByPk?: Maybe<User>
  /** update multiples rows of table: "User" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>
}

export type Hasura_Mutation_FrontendDeleteDealArgs = {
  where: DealBoolExp
}

export type Hasura_Mutation_FrontendDeleteDealByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_Mutation_FrontendDeleteEventArgs = {
  where: EventBoolExp
}

export type Hasura_Mutation_FrontendDeleteEventByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_Mutation_FrontendDeleteFavoriteEventArgs = {
  where: FavoriteEventBoolExp
}

export type Hasura_Mutation_FrontendDeleteFavoriteEventByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_Mutation_FrontendDeleteStripeInvoiceArgs = {
  where: StripeInvoiceBoolExp
}

export type Hasura_Mutation_FrontendDeleteStripeInvoiceByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_Mutation_FrontendDeleteStripePaymentArgs = {
  where: StripePaymentBoolExp
}

export type Hasura_Mutation_FrontendDeleteStripePaymentByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_Mutation_FrontendDeleteTicketArgs = {
  where: TicketBoolExp
}

export type Hasura_Mutation_FrontendDeleteTicketByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_Mutation_FrontendDeleteUserArgs = {
  where: UserBoolExp
}

export type Hasura_Mutation_FrontendDeleteUserByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_Mutation_FrontendInsertDealArgs = {
  objects: Array<DealInsertInput>
  onConflict?: InputMaybe<DealOnConflict>
}

export type Hasura_Mutation_FrontendInsertDealOneArgs = {
  object: DealInsertInput
  onConflict?: InputMaybe<DealOnConflict>
}

export type Hasura_Mutation_FrontendInsertEventArgs = {
  objects: Array<EventInsertInput>
  onConflict?: InputMaybe<EventOnConflict>
}

export type Hasura_Mutation_FrontendInsertEventOneArgs = {
  object: EventInsertInput
  onConflict?: InputMaybe<EventOnConflict>
}

export type Hasura_Mutation_FrontendInsertFavoriteEventArgs = {
  objects: Array<FavoriteEventInsertInput>
  onConflict?: InputMaybe<FavoriteEventOnConflict>
}

export type Hasura_Mutation_FrontendInsertFavoriteEventOneArgs = {
  object: FavoriteEventInsertInput
  onConflict?: InputMaybe<FavoriteEventOnConflict>
}

export type Hasura_Mutation_FrontendInsertStripeInvoiceArgs = {
  objects: Array<StripeInvoiceInsertInput>
  onConflict?: InputMaybe<StripeInvoiceOnConflict>
}

export type Hasura_Mutation_FrontendInsertStripeInvoiceOneArgs = {
  object: StripeInvoiceInsertInput
  onConflict?: InputMaybe<StripeInvoiceOnConflict>
}

export type Hasura_Mutation_FrontendInsertStripePaymentArgs = {
  objects: Array<StripePaymentInsertInput>
  onConflict?: InputMaybe<StripePaymentOnConflict>
}

export type Hasura_Mutation_FrontendInsertStripePaymentOneArgs = {
  object: StripePaymentInsertInput
  onConflict?: InputMaybe<StripePaymentOnConflict>
}

export type Hasura_Mutation_FrontendInsertTicketArgs = {
  objects: Array<TicketInsertInput>
  onConflict?: InputMaybe<TicketOnConflict>
}

export type Hasura_Mutation_FrontendInsertTicketOneArgs = {
  object: TicketInsertInput
  onConflict?: InputMaybe<TicketOnConflict>
}

export type Hasura_Mutation_FrontendInsertUserArgs = {
  objects: Array<UserInsertInput>
  onConflict?: InputMaybe<UserOnConflict>
}

export type Hasura_Mutation_FrontendInsertUserOneArgs = {
  object: UserInsertInput
  onConflict?: InputMaybe<UserOnConflict>
}

export type Hasura_Mutation_FrontendUpdateDealArgs = {
  _set?: InputMaybe<DealSetInput>
  where: DealBoolExp
}

export type Hasura_Mutation_FrontendUpdateDealByPkArgs = {
  _set?: InputMaybe<DealSetInput>
  pk_columns: DealPkColumnsInput
}

export type Hasura_Mutation_FrontendUpdateDealManyArgs = {
  updates: Array<DealUpdates>
}

export type Hasura_Mutation_FrontendUpdateEventArgs = {
  _set?: InputMaybe<EventSetInput>
  where: EventBoolExp
}

export type Hasura_Mutation_FrontendUpdateEventByPkArgs = {
  _set?: InputMaybe<EventSetInput>
  pk_columns: EventPkColumnsInput
}

export type Hasura_Mutation_FrontendUpdateEventManyArgs = {
  updates: Array<EventUpdates>
}

export type Hasura_Mutation_FrontendUpdateFavoriteEventArgs = {
  _set?: InputMaybe<FavoriteEventSetInput>
  where: FavoriteEventBoolExp
}

export type Hasura_Mutation_FrontendUpdateFavoriteEventByPkArgs = {
  _set?: InputMaybe<FavoriteEventSetInput>
  pk_columns: FavoriteEventPkColumnsInput
}

export type Hasura_Mutation_FrontendUpdateFavoriteEventManyArgs = {
  updates: Array<FavoriteEventUpdates>
}

export type Hasura_Mutation_FrontendUpdateStripeInvoiceArgs = {
  _inc?: InputMaybe<StripeInvoiceIncInput>
  _set?: InputMaybe<StripeInvoiceSetInput>
  where: StripeInvoiceBoolExp
}

export type Hasura_Mutation_FrontendUpdateStripeInvoiceByPkArgs = {
  _inc?: InputMaybe<StripeInvoiceIncInput>
  _set?: InputMaybe<StripeInvoiceSetInput>
  pk_columns: StripeInvoicePkColumnsInput
}

export type Hasura_Mutation_FrontendUpdateStripeInvoiceManyArgs = {
  updates: Array<StripeInvoiceUpdates>
}

export type Hasura_Mutation_FrontendUpdateStripePaymentArgs = {
  _set?: InputMaybe<StripePaymentSetInput>
  where: StripePaymentBoolExp
}

export type Hasura_Mutation_FrontendUpdateStripePaymentByPkArgs = {
  _set?: InputMaybe<StripePaymentSetInput>
  pk_columns: StripePaymentPkColumnsInput
}

export type Hasura_Mutation_FrontendUpdateStripePaymentManyArgs = {
  updates: Array<StripePaymentUpdates>
}

export type Hasura_Mutation_FrontendUpdateTicketArgs = {
  _inc?: InputMaybe<TicketIncInput>
  _set?: InputMaybe<TicketSetInput>
  where: TicketBoolExp
}

export type Hasura_Mutation_FrontendUpdateTicketByPkArgs = {
  _inc?: InputMaybe<TicketIncInput>
  _set?: InputMaybe<TicketSetInput>
  pk_columns: TicketPkColumnsInput
}

export type Hasura_Mutation_FrontendUpdateTicketManyArgs = {
  updates: Array<TicketUpdates>
}

export type Hasura_Mutation_FrontendUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>
  where: UserBoolExp
}

export type Hasura_Mutation_FrontendUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>
  pk_columns: UserPkColumnsInput
}

export type Hasura_Mutation_FrontendUpdateUserManyArgs = {
  updates: Array<UserUpdates>
}

export type Hasura_Query = {
  __typename?: 'hasura_query'
  /** fetch data from the table: "Deal" */
  deal: Array<Deal>
  /** fetch aggregated fields from the table: "Deal" */
  dealAggregate: DealAggregate
  /** fetch data from the table: "Deal" using primary key columns */
  dealByPk?: Maybe<Deal>
  /** fetch data from the table: "Event" */
  event: Array<Event>
  /** fetch aggregated fields from the table: "Event" */
  eventAggregate: EventAggregate
  /** fetch data from the table: "Event" using primary key columns */
  eventByPk?: Maybe<Event>
  /** fetch data from the table: "FavoriteEvent" */
  favoriteEvent: Array<FavoriteEvent>
  /** fetch aggregated fields from the table: "FavoriteEvent" */
  favoriteEventAggregate: FavoriteEventAggregate
  /** fetch data from the table: "FavoriteEvent" using primary key columns */
  favoriteEventByPk?: Maybe<FavoriteEvent>
  /** fetch data from the table: "StripeInvoice" */
  stripeInvoice: Array<StripeInvoice>
  /** fetch aggregated fields from the table: "StripeInvoice" */
  stripeInvoiceAggregate: StripeInvoiceAggregate
  /** fetch data from the table: "StripeInvoice" using primary key columns */
  stripeInvoiceByPk?: Maybe<StripeInvoice>
  /** fetch data from the table: "StripePayment" */
  stripePayment: Array<StripePayment>
  /** fetch aggregated fields from the table: "StripePayment" */
  stripePaymentAggregate: StripePaymentAggregate
  /** fetch data from the table: "StripePayment" using primary key columns */
  stripePaymentByPk?: Maybe<StripePayment>
  /** fetch data from the table: "Ticket" */
  ticket: Array<Ticket>
  /** fetch aggregated fields from the table: "Ticket" */
  ticketAggregate: TicketAggregate
  /** fetch data from the table: "Ticket" using primary key columns */
  ticketByPk?: Maybe<Ticket>
  /** fetch data from the table: "User" */
  user: Array<User>
  /** fetch aggregated fields from the table: "User" */
  userAggregate: UserAggregate
  /** fetch data from the table: "User" using primary key columns */
  userByPk?: Maybe<User>
}

export type Hasura_QueryDealArgs = {
  distinctOn?: InputMaybe<Array<DealSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy>>
  where?: InputMaybe<DealBoolExp>
}

export type Hasura_QueryDealAggregateArgs = {
  distinctOn?: InputMaybe<Array<DealSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy>>
  where?: InputMaybe<DealBoolExp>
}

export type Hasura_QueryDealByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_QueryEventArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<EventOrderBy>>
  where?: InputMaybe<EventBoolExp>
}

export type Hasura_QueryEventAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<EventOrderBy>>
  where?: InputMaybe<EventBoolExp>
}

export type Hasura_QueryEventByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_QueryFavoriteEventArgs = {
  distinctOn?: InputMaybe<Array<FavoriteEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FavoriteEventOrderBy>>
  where?: InputMaybe<FavoriteEventBoolExp>
}

export type Hasura_QueryFavoriteEventAggregateArgs = {
  distinctOn?: InputMaybe<Array<FavoriteEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FavoriteEventOrderBy>>
  where?: InputMaybe<FavoriteEventBoolExp>
}

export type Hasura_QueryFavoriteEventByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_QueryStripeInvoiceArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

export type Hasura_QueryStripeInvoiceAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

export type Hasura_QueryStripeInvoiceByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_QueryStripePaymentArgs = {
  distinctOn?: InputMaybe<Array<StripePaymentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripePaymentOrderBy>>
  where?: InputMaybe<StripePaymentBoolExp>
}

export type Hasura_QueryStripePaymentAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripePaymentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripePaymentOrderBy>>
  where?: InputMaybe<StripePaymentBoolExp>
}

export type Hasura_QueryStripePaymentByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_QueryTicketArgs = {
  distinctOn?: InputMaybe<Array<TicketSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy>>
  where?: InputMaybe<TicketBoolExp>
}

export type Hasura_QueryTicketAggregateArgs = {
  distinctOn?: InputMaybe<Array<TicketSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy>>
  where?: InputMaybe<TicketBoolExp>
}

export type Hasura_QueryTicketByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_QueryUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Hasura_QueryUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Hasura_QueryUserByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_Subscription = {
  __typename?: 'hasura_subscription'
  /** fetch data from the table: "Deal" */
  deal: Array<Deal>
  /** fetch aggregated fields from the table: "Deal" */
  dealAggregate: DealAggregate
  /** fetch data from the table: "Deal" using primary key columns */
  dealByPk?: Maybe<Deal>
  /** fetch data from the table in a streaming manner: "Deal" */
  dealStream: Array<Deal>
  /** fetch data from the table: "Event" */
  event: Array<Event>
  /** fetch aggregated fields from the table: "Event" */
  eventAggregate: EventAggregate
  /** fetch data from the table: "Event" using primary key columns */
  eventByPk?: Maybe<Event>
  /** fetch data from the table in a streaming manner: "Event" */
  eventStream: Array<Event>
  /** fetch data from the table: "FavoriteEvent" */
  favoriteEvent: Array<FavoriteEvent>
  /** fetch aggregated fields from the table: "FavoriteEvent" */
  favoriteEventAggregate: FavoriteEventAggregate
  /** fetch data from the table: "FavoriteEvent" using primary key columns */
  favoriteEventByPk?: Maybe<FavoriteEvent>
  /** fetch data from the table in a streaming manner: "FavoriteEvent" */
  favoriteEventStream: Array<FavoriteEvent>
  /** fetch data from the table: "StripeInvoice" */
  stripeInvoice: Array<StripeInvoice>
  /** fetch aggregated fields from the table: "StripeInvoice" */
  stripeInvoiceAggregate: StripeInvoiceAggregate
  /** fetch data from the table: "StripeInvoice" using primary key columns */
  stripeInvoiceByPk?: Maybe<StripeInvoice>
  /** fetch data from the table in a streaming manner: "StripeInvoice" */
  stripeInvoiceStream: Array<StripeInvoice>
  /** fetch data from the table: "StripePayment" */
  stripePayment: Array<StripePayment>
  /** fetch aggregated fields from the table: "StripePayment" */
  stripePaymentAggregate: StripePaymentAggregate
  /** fetch data from the table: "StripePayment" using primary key columns */
  stripePaymentByPk?: Maybe<StripePayment>
  /** fetch data from the table in a streaming manner: "StripePayment" */
  stripePaymentStream: Array<StripePayment>
  /** fetch data from the table: "Ticket" */
  ticket: Array<Ticket>
  /** fetch aggregated fields from the table: "Ticket" */
  ticketAggregate: TicketAggregate
  /** fetch data from the table: "Ticket" using primary key columns */
  ticketByPk?: Maybe<Ticket>
  /** fetch data from the table in a streaming manner: "Ticket" */
  ticketStream: Array<Ticket>
  /** fetch data from the table: "User" */
  user: Array<User>
  /** fetch aggregated fields from the table: "User" */
  userAggregate: UserAggregate
  /** fetch data from the table: "User" using primary key columns */
  userByPk?: Maybe<User>
  /** fetch data from the table in a streaming manner: "User" */
  userStream: Array<User>
}

export type Hasura_SubscriptionDealArgs = {
  distinctOn?: InputMaybe<Array<DealSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy>>
  where?: InputMaybe<DealBoolExp>
}

export type Hasura_SubscriptionDealAggregateArgs = {
  distinctOn?: InputMaybe<Array<DealSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy>>
  where?: InputMaybe<DealBoolExp>
}

export type Hasura_SubscriptionDealByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_SubscriptionDealStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Deal_StreamCursorInput>>
  where?: InputMaybe<DealBoolExp>
}

export type Hasura_SubscriptionEventArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<EventOrderBy>>
  where?: InputMaybe<EventBoolExp>
}

export type Hasura_SubscriptionEventAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<EventOrderBy>>
  where?: InputMaybe<EventBoolExp>
}

export type Hasura_SubscriptionEventByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_SubscriptionEventStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Event_StreamCursorInput>>
  where?: InputMaybe<EventBoolExp>
}

export type Hasura_SubscriptionFavoriteEventArgs = {
  distinctOn?: InputMaybe<Array<FavoriteEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FavoriteEventOrderBy>>
  where?: InputMaybe<FavoriteEventBoolExp>
}

export type Hasura_SubscriptionFavoriteEventAggregateArgs = {
  distinctOn?: InputMaybe<Array<FavoriteEventSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FavoriteEventOrderBy>>
  where?: InputMaybe<FavoriteEventBoolExp>
}

export type Hasura_SubscriptionFavoriteEventByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_SubscriptionFavoriteEventStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<FavoriteEvent_StreamCursorInput>>
  where?: InputMaybe<FavoriteEventBoolExp>
}

export type Hasura_SubscriptionStripeInvoiceArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

export type Hasura_SubscriptionStripeInvoiceAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripeInvoiceSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripeInvoiceOrderBy>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

export type Hasura_SubscriptionStripeInvoiceByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_SubscriptionStripeInvoiceStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<StripeInvoice_StreamCursorInput>>
  where?: InputMaybe<StripeInvoiceBoolExp>
}

export type Hasura_SubscriptionStripePaymentArgs = {
  distinctOn?: InputMaybe<Array<StripePaymentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripePaymentOrderBy>>
  where?: InputMaybe<StripePaymentBoolExp>
}

export type Hasura_SubscriptionStripePaymentAggregateArgs = {
  distinctOn?: InputMaybe<Array<StripePaymentSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StripePaymentOrderBy>>
  where?: InputMaybe<StripePaymentBoolExp>
}

export type Hasura_SubscriptionStripePaymentByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_SubscriptionStripePaymentStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<StripePayment_StreamCursorInput>>
  where?: InputMaybe<StripePaymentBoolExp>
}

export type Hasura_SubscriptionTicketArgs = {
  distinctOn?: InputMaybe<Array<TicketSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy>>
  where?: InputMaybe<TicketBoolExp>
}

export type Hasura_SubscriptionTicketAggregateArgs = {
  distinctOn?: InputMaybe<Array<TicketSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy>>
  where?: InputMaybe<TicketBoolExp>
}

export type Hasura_SubscriptionTicketByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_SubscriptionTicketStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<Ticket_StreamCursorInput>>
  where?: InputMaybe<TicketBoolExp>
}

export type Hasura_SubscriptionUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Hasura_SubscriptionUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy>>
  where?: InputMaybe<UserBoolExp>
}

export type Hasura_SubscriptionUserByPkArgs = {
  id: Scalars['uuid']
}

export type Hasura_SubscriptionUserStreamArgs = {
  batchSize: Scalars['Int']
  cursor: Array<InputMaybe<User_StreamCursorInput>>
  where?: InputMaybe<UserBoolExp>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  createStripePayment: StripePaymentResponseDto
  createStripeSetupIntent: Scalars['String']
  establishDeal: DealResponseDto
  hasura?: Maybe<Hasura_Mutation_Frontend>
  initializeDeal: DealResponseDto
  makePaidDeal: DealResponseDto
  makeReceivedDeal: DealResponseDto
  makeShippedDeal: DealResponseDto
  signInUser: UserSignInResponse
  signUpUser: Scalars['Boolean']
}

/** mutation root */
export type Mutation_RootCreateStripePaymentArgs = {
  stripePaymentMethodId: Scalars['String']
}

/** mutation root */
export type Mutation_RootEstablishDealArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootInitializeDealArgs = {
  ticketId: Scalars['String']
}

/** mutation root */
export type Mutation_RootMakePaidDealArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootMakeReceivedDealArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootMakeShippedDealArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootSignInUserArgs = {
  data: UserSignInInput
}

/** mutation root */
export type Mutation_RootSignUpUserArgs = {
  data: UserSignUpInput
}

export type Query_Root = {
  __typename?: 'query_root'
  currentUser: CurrentUserResponse
  hasura?: Maybe<Hasura_Query>
  sayHello: Scalars['String']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  hasura?: Maybe<Hasura_Subscription>
}

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>

export type CurrentUserQuery = {
  __typename?: 'query_root'
  currentUser: { __typename?: 'CurrentUserResponse'; id: string; email: string }
}

export type SignUpUserMutationVariables = Exact<{
  data: UserSignUpInput
}>

export type SignUpUserMutation = { __typename?: 'mutation_root'; signUpUser: boolean }

export type SignInUserMutationVariables = Exact<{
  data: UserSignInInput
}>

export type SignInUserMutation = {
  __typename?: 'mutation_root'
  signInUser: { __typename?: 'UserSignInResponse'; jwtToken: string }
}

export type DealFragment = {
  __typename?: 'Deal'
  id: any
  ticketId: any
  customerId: any
  status: any
  establishedAt?: any | null
  paidAt?: any | null
  shippedAt?: any | null
  receivedAt?: any | null
  closedAt?: any | null
  rejectedAt?: any | null
  createdAt: any
  updatedAt: any
  ticket: {
    __typename?: 'Ticket'
    id: any
    sellerId: any
    eventId: any
    status: any
    priceForCell: number
    cellsCount: number
    description: string
    createdAt: any
    updatedAt: any
    event: { __typename?: 'Event'; id: any; name: string; startAt: any; status: any; createdAt: any; updatedAt: any }
    seller: { __typename?: 'User'; id: any; email: string }
  }
  customer: { __typename?: 'User'; id: any; email: string; createdAt: any; updatedAt: any }
}

export type DealsQueryVariables = Exact<{
  where?: InputMaybe<DealBoolExp>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DealOrderBy> | DealOrderBy>
}>

export type DealsQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    deal: Array<{
      __typename?: 'Deal'
      id: any
      ticketId: any
      customerId: any
      status: any
      establishedAt?: any | null
      paidAt?: any | null
      shippedAt?: any | null
      receivedAt?: any | null
      closedAt?: any | null
      rejectedAt?: any | null
      createdAt: any
      updatedAt: any
      ticket: {
        __typename?: 'Ticket'
        id: any
        sellerId: any
        eventId: any
        status: any
        priceForCell: number
        cellsCount: number
        description: string
        createdAt: any
        updatedAt: any
        event: {
          __typename?: 'Event'
          id: any
          name: string
          startAt: any
          status: any
          createdAt: any
          updatedAt: any
        }
        seller: { __typename?: 'User'; id: any; email: string }
      }
      customer: { __typename?: 'User'; id: any; email: string; createdAt: any; updatedAt: any }
    }>
  } | null
}

export type DealQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>
}>

export type DealQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    dealByPk?: {
      __typename?: 'Deal'
      id: any
      ticketId: any
      customerId: any
      status: any
      establishedAt?: any | null
      paidAt?: any | null
      shippedAt?: any | null
      receivedAt?: any | null
      closedAt?: any | null
      rejectedAt?: any | null
      createdAt: any
      updatedAt: any
      ticket: {
        __typename?: 'Ticket'
        id: any
        sellerId: any
        eventId: any
        status: any
        priceForCell: number
        cellsCount: number
        description: string
        createdAt: any
        updatedAt: any
        event: {
          __typename?: 'Event'
          id: any
          name: string
          startAt: any
          status: any
          createdAt: any
          updatedAt: any
        }
        seller: { __typename?: 'User'; id: any; email: string }
      }
      customer: { __typename?: 'User'; id: any; email: string; createdAt: any; updatedAt: any }
    } | null
  } | null
}

export type InitializeDealMutationVariables = Exact<{
  ticketId: Scalars['String']
}>

export type InitializeDealMutation = {
  __typename?: 'mutation_root'
  initializeDeal: { __typename?: 'DealResponseDto'; id: string }
}

export type EstablishDealMutationVariables = Exact<{
  id: Scalars['String']
}>

export type EstablishDealMutation = {
  __typename?: 'mutation_root'
  establishDeal: { __typename?: 'DealResponseDto'; id: string }
}

export type MakeShippedDealMutationVariables = Exact<{
  id: Scalars['String']
}>

export type MakeShippedDealMutation = {
  __typename?: 'mutation_root'
  makeShippedDeal: { __typename?: 'DealResponseDto'; id: string }
}

export type MakeReceivedDealMutationVariables = Exact<{
  id: Scalars['String']
}>

export type MakeReceivedDealMutation = {
  __typename?: 'mutation_root'
  makeReceivedDeal: { __typename?: 'DealResponseDto'; id: string }
}

export type EventFragment = {
  __typename?: 'Event'
  id: any
  name: string
  startAt: any
  status: any
  createdAt: any
  updatedAt: any
}

export type EventsQueryVariables = Exact<{
  where?: InputMaybe<EventBoolExp>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<EventOrderBy> | EventOrderBy>
}>

export type EventsQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    event: Array<{
      __typename?: 'Event'
      id: any
      name: string
      startAt: any
      status: any
      createdAt: any
      updatedAt: any
    }>
  } | null
}

export type EventsForUsersQueryVariables = Exact<{
  eventWhere?: InputMaybe<EventBoolExp>
  eventLimit?: InputMaybe<Scalars['Int']>
  eventOffset?: InputMaybe<Scalars['Int']>
  eventOrderBy?: InputMaybe<Array<EventOrderBy> | EventOrderBy>
}>

export type EventsForUsersQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    event: Array<{
      __typename?: 'Event'
      id: any
      name: string
      startAt: any
      status: any
      createdAt: any
      updatedAt: any
      favoriteEvent?: { __typename?: 'FavoriteEvent'; id: any } | null
    }>
  } | null
}

export type EventQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>
}>

export type EventQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    eventByPk?: {
      __typename?: 'Event'
      id: any
      name: string
      startAt: any
      status: any
      createdAt: any
      updatedAt: any
    } | null
  } | null
}

export type CreateEventMutationVariables = Exact<{
  object?: InputMaybe<EventInsertInput>
}>

export type CreateEventMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    insertEventOne?: {
      __typename?: 'Event'
      id: any
      name: string
      startAt: any
      status: any
      createdAt: any
      updatedAt: any
    } | null
  } | null
}

export type UpdateEventMutationVariables = Exact<{
  _set?: InputMaybe<EventSetInput>
  pk_columns?: InputMaybe<EventPkColumnsInput>
}>

export type UpdateEventMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    updateEventByPk?: {
      __typename?: 'Event'
      id: any
      name: string
      startAt: any
      status: any
      createdAt: any
      updatedAt: any
    } | null
  } | null
}

export type DeleteEventMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>
}>

export type DeleteEventMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    deleteEventByPk?: {
      __typename?: 'Event'
      id: any
      name: string
      startAt: any
      status: any
      createdAt: any
      updatedAt: any
    } | null
  } | null
}

export type FavoriteEventsQueryVariables = Exact<{ [key: string]: never }>

export type FavoriteEventsQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    favoriteEvent: Array<{
      __typename?: 'FavoriteEvent'
      id: any
      event: { __typename?: 'Event'; id: any; name: string; startAt: any; status: any; createdAt: any; updatedAt: any }
    }>
  } | null
}

export type AddFavoriteEventMutationVariables = Exact<{
  object: FavoriteEventInsertInput
}>

export type AddFavoriteEventMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    insertFavoriteEventOne?: { __typename?: 'FavoriteEvent'; id: any } | null
  } | null
}

export type RemoveFavoriteEventMutationVariables = Exact<{
  id: Scalars['uuid']
}>

export type RemoveFavoriteEventMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    deleteFavoriteEventByPk?: { __typename?: 'FavoriteEvent'; id: any } | null
  } | null
}

export type StripePaymentsQueryVariables = Exact<{
  where?: InputMaybe<StripePaymentBoolExp>
}>

export type StripePaymentsQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    stripePayment: Array<{
      __typename?: 'StripePayment'
      id: any
      userId: any
      brand: string
      expMonth: string
      expYear: string
      last4: string
    }>
  } | null
}

export type CreateStripeSetupIntentMutationVariables = Exact<{ [key: string]: never }>

export type CreateStripeSetupIntentMutation = { __typename?: 'mutation_root'; createStripeSetupIntent: string }

export type CreateStripePaymentMutationVariables = Exact<{
  stripePaymentMethodId: Scalars['String']
}>

export type CreateStripePaymentMutation = {
  __typename?: 'mutation_root'
  createStripePayment: {
    __typename?: 'StripePaymentResponseDto'
    id: string
    userId: string
    brand: string
    expMonth: string
    expYear: string
    last4: string
  }
}

export type TicketFragment = {
  __typename?: 'Ticket'
  id: any
  sellerId: any
  eventId: any
  status: any
  priceForCell: number
  cellsCount: number
  description: string
  createdAt: any
  updatedAt: any
  event: { __typename?: 'Event'; id: any; name: string; startAt: any; status: any; createdAt: any; updatedAt: any }
  seller: { __typename?: 'User'; id: any; email: string }
}

export type TicketsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TicketOrderBy> | TicketOrderBy>
  where?: InputMaybe<TicketBoolExp>
}>

export type TicketsQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    ticket: Array<{
      __typename?: 'Ticket'
      id: any
      sellerId: any
      eventId: any
      status: any
      priceForCell: number
      cellsCount: number
      description: string
      createdAt: any
      updatedAt: any
      event: { __typename?: 'Event'; id: any; name: string; startAt: any; status: any; createdAt: any; updatedAt: any }
      seller: { __typename?: 'User'; id: any; email: string }
    }>
  } | null
}

export type TicketQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>
}>

export type TicketQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    ticketByPk?: {
      __typename?: 'Ticket'
      id: any
      sellerId: any
      eventId: any
      status: any
      priceForCell: number
      cellsCount: number
      description: string
      createdAt: any
      updatedAt: any
      event: { __typename?: 'Event'; id: any; name: string; startAt: any; status: any; createdAt: any; updatedAt: any }
      seller: { __typename?: 'User'; id: any; email: string }
    } | null
  } | null
}

export type CreateTicketMutationVariables = Exact<{
  object?: InputMaybe<TicketInsertInput>
}>

export type CreateTicketMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    insertTicketOne?: {
      __typename?: 'Ticket'
      id: any
      sellerId: any
      eventId: any
      status: any
      priceForCell: number
      cellsCount: number
      description: string
      createdAt: any
      updatedAt: any
      event: { __typename?: 'Event'; id: any; name: string; startAt: any; status: any; createdAt: any; updatedAt: any }
      seller: { __typename?: 'User'; id: any; email: string }
    } | null
  } | null
}

export type UpdateTicketMutationVariables = Exact<{
  _set?: InputMaybe<TicketSetInput>
  pk_columns?: InputMaybe<TicketPkColumnsInput>
}>

export type UpdateTicketMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    updateTicketByPk?: {
      __typename?: 'Ticket'
      id: any
      sellerId: any
      eventId: any
      status: any
      priceForCell: number
      cellsCount: number
      description: string
      createdAt: any
      updatedAt: any
      event: { __typename?: 'Event'; id: any; name: string; startAt: any; status: any; createdAt: any; updatedAt: any }
      seller: { __typename?: 'User'; id: any; email: string }
    } | null
  } | null
}

export type DeleteTicketMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>
}>

export type DeleteTicketMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    deleteTicketByPk?: {
      __typename?: 'Ticket'
      id: any
      sellerId: any
      eventId: any
      status: any
      priceForCell: number
      cellsCount: number
      description: string
      createdAt: any
      updatedAt: any
      event: { __typename?: 'Event'; id: any; name: string; startAt: any; status: any; createdAt: any; updatedAt: any }
      seller: { __typename?: 'User'; id: any; email: string }
    } | null
  } | null
}

export type UserFragment = { __typename?: 'User'; id: any; email: string; createdAt: any; updatedAt: any }

export type UserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>
}>

export type UserQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    userByPk?: { __typename?: 'User'; id: any; email: string; createdAt: any; updatedAt: any } | null
  } | null
}

export type UsersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UserOrderBy> | UserOrderBy>
  where?: InputMaybe<UserBoolExp>
}>

export type UsersQuery = {
  __typename?: 'query_root'
  hasura?: {
    __typename?: 'hasura_query'
    user: Array<{ __typename?: 'User'; id: any; email: string; createdAt: any; updatedAt: any }>
  } | null
}

export type UpdateUserMutationVariables = Exact<{
  _set?: InputMaybe<UserSetInput>
  pk_columns?: InputMaybe<UserPkColumnsInput>
}>

export type UpdateUserMutation = {
  __typename?: 'mutation_root'
  hasura?: {
    __typename?: 'hasura_mutation_frontend'
    updateUserByPk?: { __typename?: 'User'; id: any; email: string; createdAt: any; updatedAt: any } | null
  } | null
}

export const EventFragmentDoc = gql`
  fragment event on Event {
    id
    name
    startAt
    status
    createdAt
    updatedAt
  }
`
export const TicketFragmentDoc = gql`
  fragment ticket on Ticket {
    id
    sellerId
    eventId
    status
    priceForCell
    cellsCount
    description
    event {
      ...event
    }
    seller {
      id
      email
    }
    createdAt
    updatedAt
  }
  ${EventFragmentDoc}
`
export const UserFragmentDoc = gql`
  fragment user on User {
    id
    email
    createdAt
    updatedAt
  }
`
export const DealFragmentDoc = gql`
  fragment deal on Deal {
    id
    ticketId
    customerId
    status
    establishedAt
    paidAt
    shippedAt
    receivedAt
    closedAt
    rejectedAt
    createdAt
    updatedAt
    ticket {
      ...ticket
    }
    customer {
      ...user
    }
  }
  ${TicketFragmentDoc}
  ${UserFragmentDoc}
`
export const CurrentUserDocument = gql`
  query CurrentUser {
    currentUser {
      id
      email
    }
  }
`

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options)
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options)
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>
export const SignUpUserDocument = gql`
  mutation SignUpUser($data: UserSignUpInput!) {
    signUpUser(data: $data)
  }
`
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpUserMutation(
  baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options)
}
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>
export const SignInUserDocument = gql`
  mutation SignInUser($data: UserSignInInput!) {
    signInUser(data: $data) {
      jwtToken
    }
  }
`
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInUserMutation(
  baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options)
}
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>
export const DealsDocument = gql`
  query Deals($where: DealBoolExp = {}, $limit: Int = 10, $offset: Int = 0, $orderBy: [DealOrderBy!] = {}) {
    hasura {
      deal(where: $where, limit: $limit, offset: $offset, orderBy: $orderBy) {
        ...deal
      }
    }
  }
  ${DealFragmentDoc}
`

/**
 * __useDealsQuery__
 *
 * To run a query within a React component, call `useDealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useDealsQuery(baseOptions?: Apollo.QueryHookOptions<DealsQuery, DealsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DealsQuery, DealsQueryVariables>(DealsDocument, options)
}
export function useDealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DealsQuery, DealsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DealsQuery, DealsQueryVariables>(DealsDocument, options)
}
export type DealsQueryHookResult = ReturnType<typeof useDealsQuery>
export type DealsLazyQueryHookResult = ReturnType<typeof useDealsLazyQuery>
export type DealsQueryResult = Apollo.QueryResult<DealsQuery, DealsQueryVariables>
export const DealDocument = gql`
  query Deal($id: uuid = "") {
    hasura {
      dealByPk(id: $id) {
        ...deal
      }
    }
  }
  ${DealFragmentDoc}
`

/**
 * __useDealQuery__
 *
 * To run a query within a React component, call `useDealQuery` and pass it any options that fit your needs.
 * When your component renders, `useDealQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDealQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDealQuery(baseOptions?: Apollo.QueryHookOptions<DealQuery, DealQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DealQuery, DealQueryVariables>(DealDocument, options)
}
export function useDealLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DealQuery, DealQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DealQuery, DealQueryVariables>(DealDocument, options)
}
export type DealQueryHookResult = ReturnType<typeof useDealQuery>
export type DealLazyQueryHookResult = ReturnType<typeof useDealLazyQuery>
export type DealQueryResult = Apollo.QueryResult<DealQuery, DealQueryVariables>
export const InitializeDealDocument = gql`
  mutation InitializeDeal($ticketId: String!) {
    initializeDeal(ticketId: $ticketId) {
      id
    }
  }
`
export type InitializeDealMutationFn = Apollo.MutationFunction<InitializeDealMutation, InitializeDealMutationVariables>

/**
 * __useInitializeDealMutation__
 *
 * To run a mutation, you first call `useInitializeDealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitializeDealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initializeDealMutation, { data, loading, error }] = useInitializeDealMutation({
 *   variables: {
 *      ticketId: // value for 'ticketId'
 *   },
 * });
 */
export function useInitializeDealMutation(
  baseOptions?: Apollo.MutationHookOptions<InitializeDealMutation, InitializeDealMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<InitializeDealMutation, InitializeDealMutationVariables>(InitializeDealDocument, options)
}
export type InitializeDealMutationHookResult = ReturnType<typeof useInitializeDealMutation>
export type InitializeDealMutationResult = Apollo.MutationResult<InitializeDealMutation>
export type InitializeDealMutationOptions = Apollo.BaseMutationOptions<
  InitializeDealMutation,
  InitializeDealMutationVariables
>
export const EstablishDealDocument = gql`
  mutation EstablishDeal($id: String!) {
    establishDeal(id: $id) {
      id
    }
  }
`
export type EstablishDealMutationFn = Apollo.MutationFunction<EstablishDealMutation, EstablishDealMutationVariables>

/**
 * __useEstablishDealMutation__
 *
 * To run a mutation, you first call `useEstablishDealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEstablishDealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [establishDealMutation, { data, loading, error }] = useEstablishDealMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEstablishDealMutation(
  baseOptions?: Apollo.MutationHookOptions<EstablishDealMutation, EstablishDealMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<EstablishDealMutation, EstablishDealMutationVariables>(EstablishDealDocument, options)
}
export type EstablishDealMutationHookResult = ReturnType<typeof useEstablishDealMutation>
export type EstablishDealMutationResult = Apollo.MutationResult<EstablishDealMutation>
export type EstablishDealMutationOptions = Apollo.BaseMutationOptions<
  EstablishDealMutation,
  EstablishDealMutationVariables
>
export const MakeShippedDealDocument = gql`
  mutation MakeShippedDeal($id: String!) {
    makeShippedDeal(id: $id) {
      id
    }
  }
`
export type MakeShippedDealMutationFn = Apollo.MutationFunction<
  MakeShippedDealMutation,
  MakeShippedDealMutationVariables
>

/**
 * __useMakeShippedDealMutation__
 *
 * To run a mutation, you first call `useMakeShippedDealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeShippedDealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeShippedDealMutation, { data, loading, error }] = useMakeShippedDealMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMakeShippedDealMutation(
  baseOptions?: Apollo.MutationHookOptions<MakeShippedDealMutation, MakeShippedDealMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<MakeShippedDealMutation, MakeShippedDealMutationVariables>(MakeShippedDealDocument, options)
}
export type MakeShippedDealMutationHookResult = ReturnType<typeof useMakeShippedDealMutation>
export type MakeShippedDealMutationResult = Apollo.MutationResult<MakeShippedDealMutation>
export type MakeShippedDealMutationOptions = Apollo.BaseMutationOptions<
  MakeShippedDealMutation,
  MakeShippedDealMutationVariables
>
export const MakeReceivedDealDocument = gql`
  mutation MakeReceivedDeal($id: String!) {
    makeReceivedDeal(id: $id) {
      id
    }
  }
`
export type MakeReceivedDealMutationFn = Apollo.MutationFunction<
  MakeReceivedDealMutation,
  MakeReceivedDealMutationVariables
>

/**
 * __useMakeReceivedDealMutation__
 *
 * To run a mutation, you first call `useMakeReceivedDealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeReceivedDealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeReceivedDealMutation, { data, loading, error }] = useMakeReceivedDealMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMakeReceivedDealMutation(
  baseOptions?: Apollo.MutationHookOptions<MakeReceivedDealMutation, MakeReceivedDealMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<MakeReceivedDealMutation, MakeReceivedDealMutationVariables>(
    MakeReceivedDealDocument,
    options,
  )
}
export type MakeReceivedDealMutationHookResult = ReturnType<typeof useMakeReceivedDealMutation>
export type MakeReceivedDealMutationResult = Apollo.MutationResult<MakeReceivedDealMutation>
export type MakeReceivedDealMutationOptions = Apollo.BaseMutationOptions<
  MakeReceivedDealMutation,
  MakeReceivedDealMutationVariables
>
export const EventsDocument = gql`
  query Events($where: EventBoolExp = {}, $limit: Int = 10, $offset: Int = 0, $orderBy: [EventOrderBy!] = {}) {
    hasura {
      event(where: $where, limit: $limit, offset: $offset, orderBy: $orderBy) {
        ...event
      }
    }
  }
  ${EventFragmentDoc}
`

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options)
}
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options)
}
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>
export const EventsForUsersDocument = gql`
  query EventsForUsers(
    $eventWhere: EventBoolExp
    $eventLimit: Int = 10
    $eventOffset: Int
    $eventOrderBy: [EventOrderBy!]
  ) {
    hasura {
      event(where: $eventWhere, limit: $eventLimit, offset: $eventOffset, orderBy: $eventOrderBy) {
        ...event
        favoriteEvent {
          id
        }
      }
    }
  }
  ${EventFragmentDoc}
`

/**
 * __useEventsForUsersQuery__
 *
 * To run a query within a React component, call `useEventsForUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsForUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsForUsersQuery({
 *   variables: {
 *      eventWhere: // value for 'eventWhere'
 *      eventLimit: // value for 'eventLimit'
 *      eventOffset: // value for 'eventOffset'
 *      eventOrderBy: // value for 'eventOrderBy'
 *   },
 * });
 */
export function useEventsForUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<EventsForUsersQuery, EventsForUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<EventsForUsersQuery, EventsForUsersQueryVariables>(EventsForUsersDocument, options)
}
export function useEventsForUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<EventsForUsersQuery, EventsForUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<EventsForUsersQuery, EventsForUsersQueryVariables>(EventsForUsersDocument, options)
}
export type EventsForUsersQueryHookResult = ReturnType<typeof useEventsForUsersQuery>
export type EventsForUsersLazyQueryHookResult = ReturnType<typeof useEventsForUsersLazyQuery>
export type EventsForUsersQueryResult = Apollo.QueryResult<EventsForUsersQuery, EventsForUsersQueryVariables>
export const EventDocument = gql`
  query Event($id: uuid = "") {
    hasura {
      eventByPk(id: $id) {
        ...event
      }
    }
  }
  ${EventFragmentDoc}
`

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventQuery(baseOptions?: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options)
}
export function useEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options)
}
export type EventQueryHookResult = ReturnType<typeof useEventQuery>
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>
export const CreateEventDocument = gql`
  mutation CreateEvent($object: EventInsertInput = {}) {
    hasura {
      insertEventOne(object: $object) {
        ...event
      }
    }
  }
  ${EventFragmentDoc}
`
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateEventMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options)
}
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>
export const UpdateEventDocument = gql`
  mutation UpdateEvent($_set: EventSetInput = {}, $pk_columns: EventPkColumnsInput = { id: "" }) {
    hasura {
      updateEventByPk(pk_columns: $pk_columns, _set: $_set) {
        ...event
      }
    }
  }
  ${EventFragmentDoc}
`
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      _set: // value for '_set'
 *      pk_columns: // value for 'pk_columns'
 *   },
 * });
 */
export function useUpdateEventMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options)
}
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>
export const DeleteEventDocument = gql`
  mutation DeleteEvent($id: uuid = "") {
    hasura {
      deleteEventByPk(id: $id) {
        ...event
      }
    }
  }
  ${EventFragmentDoc}
`
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options)
}
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>
export const FavoriteEventsDocument = gql`
  query FavoriteEvents {
    hasura {
      favoriteEvent {
        id
        event {
          ...event
        }
      }
    }
  }
  ${EventFragmentDoc}
`

/**
 * __useFavoriteEventsQuery__
 *
 * To run a query within a React component, call `useFavoriteEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFavoriteEventsQuery(
  baseOptions?: Apollo.QueryHookOptions<FavoriteEventsQuery, FavoriteEventsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FavoriteEventsQuery, FavoriteEventsQueryVariables>(FavoriteEventsDocument, options)
}
export function useFavoriteEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FavoriteEventsQuery, FavoriteEventsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FavoriteEventsQuery, FavoriteEventsQueryVariables>(FavoriteEventsDocument, options)
}
export type FavoriteEventsQueryHookResult = ReturnType<typeof useFavoriteEventsQuery>
export type FavoriteEventsLazyQueryHookResult = ReturnType<typeof useFavoriteEventsLazyQuery>
export type FavoriteEventsQueryResult = Apollo.QueryResult<FavoriteEventsQuery, FavoriteEventsQueryVariables>
export const AddFavoriteEventDocument = gql`
  mutation AddFavoriteEvent($object: FavoriteEventInsertInput!) {
    hasura {
      insertFavoriteEventOne(object: $object) {
        id
      }
    }
  }
`
export type AddFavoriteEventMutationFn = Apollo.MutationFunction<
  AddFavoriteEventMutation,
  AddFavoriteEventMutationVariables
>

/**
 * __useAddFavoriteEventMutation__
 *
 * To run a mutation, you first call `useAddFavoriteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteEventMutation, { data, loading, error }] = useAddFavoriteEventMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useAddFavoriteEventMutation(
  baseOptions?: Apollo.MutationHookOptions<AddFavoriteEventMutation, AddFavoriteEventMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddFavoriteEventMutation, AddFavoriteEventMutationVariables>(
    AddFavoriteEventDocument,
    options,
  )
}
export type AddFavoriteEventMutationHookResult = ReturnType<typeof useAddFavoriteEventMutation>
export type AddFavoriteEventMutationResult = Apollo.MutationResult<AddFavoriteEventMutation>
export type AddFavoriteEventMutationOptions = Apollo.BaseMutationOptions<
  AddFavoriteEventMutation,
  AddFavoriteEventMutationVariables
>
export const RemoveFavoriteEventDocument = gql`
  mutation RemoveFavoriteEvent($id: uuid!) {
    hasura {
      deleteFavoriteEventByPk(id: $id) {
        id
      }
    }
  }
`
export type RemoveFavoriteEventMutationFn = Apollo.MutationFunction<
  RemoveFavoriteEventMutation,
  RemoveFavoriteEventMutationVariables
>

/**
 * __useRemoveFavoriteEventMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteEventMutation, { data, loading, error }] = useRemoveFavoriteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFavoriteEventMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteEventMutation, RemoveFavoriteEventMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RemoveFavoriteEventMutation, RemoveFavoriteEventMutationVariables>(
    RemoveFavoriteEventDocument,
    options,
  )
}
export type RemoveFavoriteEventMutationHookResult = ReturnType<typeof useRemoveFavoriteEventMutation>
export type RemoveFavoriteEventMutationResult = Apollo.MutationResult<RemoveFavoriteEventMutation>
export type RemoveFavoriteEventMutationOptions = Apollo.BaseMutationOptions<
  RemoveFavoriteEventMutation,
  RemoveFavoriteEventMutationVariables
>
export const StripePaymentsDocument = gql`
  query StripePayments($where: StripePaymentBoolExp = {}) {
    hasura {
      stripePayment(where: $where) {
        id
        userId
        brand
        expMonth
        expYear
        last4
      }
    }
  }
`

/**
 * __useStripePaymentsQuery__
 *
 * To run a query within a React component, call `useStripePaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStripePaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStripePaymentsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useStripePaymentsQuery(
  baseOptions?: Apollo.QueryHookOptions<StripePaymentsQuery, StripePaymentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StripePaymentsQuery, StripePaymentsQueryVariables>(StripePaymentsDocument, options)
}
export function useStripePaymentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StripePaymentsQuery, StripePaymentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StripePaymentsQuery, StripePaymentsQueryVariables>(StripePaymentsDocument, options)
}
export type StripePaymentsQueryHookResult = ReturnType<typeof useStripePaymentsQuery>
export type StripePaymentsLazyQueryHookResult = ReturnType<typeof useStripePaymentsLazyQuery>
export type StripePaymentsQueryResult = Apollo.QueryResult<StripePaymentsQuery, StripePaymentsQueryVariables>
export const CreateStripeSetupIntentDocument = gql`
  mutation CreateStripeSetupIntent {
    createStripeSetupIntent
  }
`
export type CreateStripeSetupIntentMutationFn = Apollo.MutationFunction<
  CreateStripeSetupIntentMutation,
  CreateStripeSetupIntentMutationVariables
>

/**
 * __useCreateStripeSetupIntentMutation__
 *
 * To run a mutation, you first call `useCreateStripeSetupIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStripeSetupIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStripeSetupIntentMutation, { data, loading, error }] = useCreateStripeSetupIntentMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateStripeSetupIntentMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateStripeSetupIntentMutation, CreateStripeSetupIntentMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateStripeSetupIntentMutation, CreateStripeSetupIntentMutationVariables>(
    CreateStripeSetupIntentDocument,
    options,
  )
}
export type CreateStripeSetupIntentMutationHookResult = ReturnType<typeof useCreateStripeSetupIntentMutation>
export type CreateStripeSetupIntentMutationResult = Apollo.MutationResult<CreateStripeSetupIntentMutation>
export type CreateStripeSetupIntentMutationOptions = Apollo.BaseMutationOptions<
  CreateStripeSetupIntentMutation,
  CreateStripeSetupIntentMutationVariables
>
export const CreateStripePaymentDocument = gql`
  mutation CreateStripePayment($stripePaymentMethodId: String!) {
    createStripePayment(stripePaymentMethodId: $stripePaymentMethodId) {
      id
      userId
      brand
      expMonth
      expYear
      last4
    }
  }
`
export type CreateStripePaymentMutationFn = Apollo.MutationFunction<
  CreateStripePaymentMutation,
  CreateStripePaymentMutationVariables
>

/**
 * __useCreateStripePaymentMutation__
 *
 * To run a mutation, you first call `useCreateStripePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStripePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStripePaymentMutation, { data, loading, error }] = useCreateStripePaymentMutation({
 *   variables: {
 *      stripePaymentMethodId: // value for 'stripePaymentMethodId'
 *   },
 * });
 */
export function useCreateStripePaymentMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateStripePaymentMutation, CreateStripePaymentMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateStripePaymentMutation, CreateStripePaymentMutationVariables>(
    CreateStripePaymentDocument,
    options,
  )
}
export type CreateStripePaymentMutationHookResult = ReturnType<typeof useCreateStripePaymentMutation>
export type CreateStripePaymentMutationResult = Apollo.MutationResult<CreateStripePaymentMutation>
export type CreateStripePaymentMutationOptions = Apollo.BaseMutationOptions<
  CreateStripePaymentMutation,
  CreateStripePaymentMutationVariables
>
export const TicketsDocument = gql`
  query Tickets($limit: Int = 10, $offset: Int = 0, $orderBy: [TicketOrderBy!] = {}, $where: TicketBoolExp = {}) {
    hasura {
      ticket(limit: $limit, offset: $offset, orderBy: $orderBy, where: $where) {
        ...ticket
      }
    }
  }
  ${TicketFragmentDoc}
`

/**
 * __useTicketsQuery__
 *
 * To run a query within a React component, call `useTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTicketsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTicketsQuery(baseOptions?: Apollo.QueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, options)
}
export function useTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, options)
}
export type TicketsQueryHookResult = ReturnType<typeof useTicketsQuery>
export type TicketsLazyQueryHookResult = ReturnType<typeof useTicketsLazyQuery>
export type TicketsQueryResult = Apollo.QueryResult<TicketsQuery, TicketsQueryVariables>
export const TicketDocument = gql`
  query Ticket($id: uuid = "") {
    hasura {
      ticketByPk(id: $id) {
        ...ticket
      }
    }
  }
  ${TicketFragmentDoc}
`

/**
 * __useTicketQuery__
 *
 * To run a query within a React component, call `useTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTicketQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTicketQuery(baseOptions?: Apollo.QueryHookOptions<TicketQuery, TicketQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TicketQuery, TicketQueryVariables>(TicketDocument, options)
}
export function useTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TicketQuery, TicketQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TicketQuery, TicketQueryVariables>(TicketDocument, options)
}
export type TicketQueryHookResult = ReturnType<typeof useTicketQuery>
export type TicketLazyQueryHookResult = ReturnType<typeof useTicketLazyQuery>
export type TicketQueryResult = Apollo.QueryResult<TicketQuery, TicketQueryVariables>
export const CreateTicketDocument = gql`
  mutation CreateTicket($object: TicketInsertInput = {}) {
    hasura {
      insertTicketOne(object: $object) {
        ...ticket
      }
    }
  }
  ${TicketFragmentDoc}
`
export type CreateTicketMutationFn = Apollo.MutationFunction<CreateTicketMutation, CreateTicketMutationVariables>

/**
 * __useCreateTicketMutation__
 *
 * To run a mutation, you first call `useCreateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTicketMutation, { data, loading, error }] = useCreateTicketMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateTicketMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateTicketMutation, CreateTicketMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateTicketMutation, CreateTicketMutationVariables>(CreateTicketDocument, options)
}
export type CreateTicketMutationHookResult = ReturnType<typeof useCreateTicketMutation>
export type CreateTicketMutationResult = Apollo.MutationResult<CreateTicketMutation>
export type CreateTicketMutationOptions = Apollo.BaseMutationOptions<
  CreateTicketMutation,
  CreateTicketMutationVariables
>
export const UpdateTicketDocument = gql`
  mutation UpdateTicket($_set: TicketSetInput = {}, $pk_columns: TicketPkColumnsInput = { id: "" }) {
    hasura {
      updateTicketByPk(pk_columns: $pk_columns, _set: $_set) {
        ...ticket
      }
    }
  }
  ${TicketFragmentDoc}
`
export type UpdateTicketMutationFn = Apollo.MutationFunction<UpdateTicketMutation, UpdateTicketMutationVariables>

/**
 * __useUpdateTicketMutation__
 *
 * To run a mutation, you first call `useUpdateTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTicketMutation, { data, loading, error }] = useUpdateTicketMutation({
 *   variables: {
 *      _set: // value for '_set'
 *      pk_columns: // value for 'pk_columns'
 *   },
 * });
 */
export function useUpdateTicketMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateTicketMutation, UpdateTicketMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateTicketMutation, UpdateTicketMutationVariables>(UpdateTicketDocument, options)
}
export type UpdateTicketMutationHookResult = ReturnType<typeof useUpdateTicketMutation>
export type UpdateTicketMutationResult = Apollo.MutationResult<UpdateTicketMutation>
export type UpdateTicketMutationOptions = Apollo.BaseMutationOptions<
  UpdateTicketMutation,
  UpdateTicketMutationVariables
>
export const DeleteTicketDocument = gql`
  mutation DeleteTicket($id: uuid = "") {
    hasura {
      deleteTicketByPk(id: $id) {
        ...ticket
      }
    }
  }
  ${TicketFragmentDoc}
`
export type DeleteTicketMutationFn = Apollo.MutationFunction<DeleteTicketMutation, DeleteTicketMutationVariables>

/**
 * __useDeleteTicketMutation__
 *
 * To run a mutation, you first call `useDeleteTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTicketMutation, { data, loading, error }] = useDeleteTicketMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTicketMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteTicketMutation, DeleteTicketMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteTicketMutation, DeleteTicketMutationVariables>(DeleteTicketDocument, options)
}
export type DeleteTicketMutationHookResult = ReturnType<typeof useDeleteTicketMutation>
export type DeleteTicketMutationResult = Apollo.MutationResult<DeleteTicketMutation>
export type DeleteTicketMutationOptions = Apollo.BaseMutationOptions<
  DeleteTicketMutation,
  DeleteTicketMutationVariables
>
export const UserDocument = gql`
  query User($id: uuid = "") {
    hasura {
      userByPk(id: $id) {
        ...user
      }
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options)
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options)
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>
export const UsersDocument = gql`
  query Users($limit: Int = 10, $offset: Int = 0, $orderBy: [UserOrderBy!] = {}, $where: UserBoolExp = {}) {
    hasura {
      user(limit: $limit, offset: $offset, orderBy: $orderBy, where: $where) {
        ...user
      }
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options)
}
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options)
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>
export const UpdateUserDocument = gql`
  mutation UpdateUser($_set: UserSetInput = {}, $pk_columns: UserPkColumnsInput = { id: "" }) {
    hasura {
      updateUserByPk(pk_columns: $pk_columns, _set: $_set) {
        ...user
      }
    }
  }
  ${UserFragmentDoc}
`
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      _set: // value for '_set'
 *      pk_columns: // value for 'pk_columns'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options)
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>
