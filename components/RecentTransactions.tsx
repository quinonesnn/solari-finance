import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import Link from 'next/link'
import React from 'react'
import { BankTabItem } from "./BankTabItem"
import BankInfo from "./BankInfo"
import TransactionsTable from "./TransactionsTable"

const RecentTransactions = ({ accounts, transactions, appwriteItemId, page} : RecentTransactionsProps) => {
  return (
    <section className='recent-transactions'>
        <header className='flex items-center justify-between'>
            <h2 className='recent-transactions-label'>
                Recent Transactions
            </h2>
            <Link href={`/transaction-history/?id=${appwriteItemId}`}>
                View All
            </Link>
        </header>
        <Tabs defaultValue={appwriteItemId} className="w-full">
            <TabsList className="recent-transactions-tablist">
                {/* For each bank that is active a tab exists for its transactions */}
                {accounts.map((account: Account) => (
                    <TabsTrigger key={account.id} value={account.appwriteItemId}>
                        <BankTabItem
                            key={account.id}
                            account={account}
                            appwriteItemId={appwriteItemId}
                        />
                    </TabsTrigger>
                ))}
            </TabsList>
            {accounts.map((account: Account) => (
                <TabsContent key={account.id} value={account.appwriteItemId} className="space-y-4">
                    <BankInfo
                        account={account}
                        appwriteItemId={appwriteItemId}
                        type="full"
                    />
                    <TransactionsTable transactions={transactions}/>
                </TabsContent>
            ))}
        </Tabs>


    </section>
  )
}

export default RecentTransactions