import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const inquiries=sqliteTable('inquiries',{id:text('id').primaryKey(),name:text('name').notNull(),phone:text('phone').notNull(),email:text('email'),service:text('service').notNull(),location:text('location').notNull(),message:text('message').notNull(),consent:integer('consent'),createdAt:integer('created_at').notNull()});
