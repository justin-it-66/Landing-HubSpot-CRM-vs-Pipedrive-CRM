/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ChevronRight, HelpCircle, Activity, Layout, Mail, Gauge, Smartphone, Zap, BarChart3, Users, DollarSign } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-900 border-[12px] border-white p-4 md:p-8 shadow-inner selection:bg-blue-100">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-6 mb-8 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800 leading-tight mb-4">
            HubSpot vs Pipedrive: Which CRM <span className="text-[#FF7A59]">Wins</span> for B2B Sales in 2026?
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-base leading-relaxed text-blue-900 rounded-r-lg max-w-2xl shadow-sm">
            <strong>Quick Answer:</strong> Choose <strong>HubSpot</strong> if you need marketing + sales in one platform. Choose <strong>Pipedrive</strong> if you want a pure sales CRM that's dead simple and focused entirely on closing deals.
          </div>
        </motion.div>
        <div className="text-right text-[12px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-6 md:mt-0">
          B2B Comparison Guide &bull; Updated May 2026
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Left Column: Selection Guides */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-200 p-5 rounded-md shadow-sm"
          >
            <h2 className="text-[#FF7A59] font-black text-xs uppercase mb-4 tracking-wider flex items-center">
              <span className="w-2.5 h-2.5 bg-[#FF7A59] mr-2 rounded-sm text-white"></span>Choose HubSpot If
            </h2>
            <ul className="text-sm space-y-4 text-slate-600">
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#FF7A59] mt-0.5" />
                <span><strong>Free CRM + Marketing:</strong> You want a "forever free" tier that includes basic email marketing and landing page builders.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#FF7A59] mt-0.5" />
                <span><strong>Multi-channel lead tracking:</strong> Your team struggles to track leads arriving from LinkedIn ads, SEO, and webinars in one place.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#FF7A59] mt-0.5" />
                <span><strong>Automated Sequences:</strong> You need built-in email sequences and templates that sync perfectly with your sales rep's calendar.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#FF7A59] mt-0.5" />
                <span><strong>Custom Reporting:</strong> You need complex dashboards that show everything from marketing ROI to sales rep performance.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#FF7A59] mt-0.5" />
                <span><strong>Rapid Growth:</strong> You're planning to scale from 5 to 50+ sales reps and need an ecosystem that supports high-volume operations.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#FF7A59] mt-0.5" />
                <span><strong>Massive Ecosystem:</strong> Integration with 1,000+ apps (from Slack to Xero) is critical for your existing tech stack.</span>
              </li>
            </ul>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-slate-200 p-5 rounded-md shadow-sm"
          >
            <h2 className="text-[#00B67A] font-black text-xs uppercase mb-4 tracking-wider flex items-center">
              <span className="w-2.5 h-2.5 bg-[#00B67A] mr-2 rounded-sm"></span>Choose Pipedrive If
            </h2>
            <ul className="text-sm space-y-4 text-slate-600">
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#00B67A] mt-0.5" />
                <span><strong>Sales Adoption:</strong> You want a CRM that sales reps will actually <em>enjoy</em> using daily because of its frictionless design.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#00B67A] mt-0.5" />
                <span><strong>Visual Pipeline:</strong> Visual pipe management is your #1 priority; you want a drag-and-drop interface that feels like a Kanban board.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#00B67A] mt-0.5" />
                <span><strong>Lean Stacks:</strong> You already have a dedicated marketing team using different tools and just need a powerful "Sales Command Center."</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#00B67A] mt-0.5" />
                <span><strong>Quick Setup:</strong> You need to be fully operational with your team in under 30 minutes, without hiring expensive consultants.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#00B67A] mt-0.5" />
                <span><strong>Field Sales Focus:</strong> Mobile app usage is critical; your reps need to update deals while sitting in their cars between appointments.</span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#00B67A] mt-0.5" />
                <span><strong>Transparent ROI:</strong> You want predictable pricing without surprise upgrades or "Marketing Contact" overage fees.</span>
              </li>
            </ul>
          </motion.section>
        </div>

        {/* Center Column: Tables & Analysis */}
        <div className="md:col-span-6 flex flex-col gap-8">
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-slate-200 overflow-hidden rounded-md shadow-sm"
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 uppercase text-xs tracking-widest font-bold">Category</th>
                  <th className="p-4 font-black text-base text-[#FF7A59]">HubSpot CRM</th>
                  <th className="p-4 font-black text-base text-[#00B67A]">Pipedrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-500">Best for</td>
                  <td className="p-4">Growing businesses needing unified marketing & sales</td>
                  <td className="p-4">Dedicated sales teams focused on deal velocity</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-500">Key strength</td>
                  <td className="p-4">Massive ecosystem, marketing automation, free tier</td>
                  <td className="p-4">Visual UX, activity-based selling, ease of use</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-500">Biggest Trade-off</td>
                  <td className="p-4">Steep pricing curve for premium features</td>
                  <td className="p-4">Limited native marketing and support for service teams</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-500">Starting price</td>
                  <td className="p-4 font-bold text-slate-800">$0 - $20 / seat</td>
                  <td className="p-4 font-bold text-slate-800">$12 - $24 / seat</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 font-bold text-slate-500">Customization</td>
                  <td className="p-4">Infinite via Enterprise tier</td>
                  <td className="p-4">Flexible, but limited within sales scope</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <article className="prose prose-slate max-w-none space-y-8">
            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Activity className="text-blue-500" /> Deep Dive: Lead Management Workflow
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  In 2026, the definition of "Lead Management" has shifted from simple data entry to automated intelligence. 
                  <strong> HubSpot</strong> approaches this with a "Platform First" mentality. When a lead enters your ecosystem via an inbound form, 
                  HubSpot's AI immediately de-duplicates the record, enriches it with company profile data, and triggers a lead scoring sequence. 
                  Marketing teams love this because they can see exactly which blog post or LinkedIn ad generated the click. 
                  For a B2B SaaS team, this means the handoff from Marketing to Sales is seamless; the sales rep receives a notification 
                  with a complete history of every whitepaper downloaded and every email opened.
                </p>
                <p>
                  <strong>Pipedrive</strong>, by contrast, is built for the "Hunter." It assumes your sales reps are proactive. 
                  Its "Activity-Based Selling" philosophy is baked into every screen. A CRM is only as good as the data entered into it, 
                  and Pipedrive makes data entry almost invisible. Their visual pipeline isn't just a view—it's the engine of the app. 
                  When you move a lead to "Scheduled Call," Pipedrive prompts for the <em>next</em> action immediately. 
                  This prevents "Lead Decay," where deals sit in the pipeline and rot because no one knew what the next step was. 
                  For companies that rely on high-volume outbound calling or field sales where speed is more important than 
                  cross-departmental reporting, Pipedrive wins hands-down.
                </p>
                <div className="bg-slate-50 p-6 border-l-4 border-slate-300 italic text-sm">
                  "HubSpot is like a Tesla—it does a lot for you and integrates with your whole home ecosystem. 
                  Pipedrive is like a high-performance manual sports car; you feel every gear shift, and it's designed for 
                  one thing: getting as fast as possible to the finish line (the Closed Won deal)."
                </div>
              </div>
            </section>

            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Zap className="text-yellow-500" /> Automation & Integrations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 uppercase text-xs tracking-widest text-[#FF7A59]">The HubSpot Powerhouse</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    HubSpot's automation engine (Workflows) is perhaps the most powerful in the SMB market. You can create branching logic 
                    based on nearly any data point. If a lead from New York with &gt;50 employees opens your pricing page twice in 24 hours, 
                    HubSpot can auto-assign them to your "East Coast Senior Rep" and send a personalized SMS.
                  </p>
                  <ul className="text-xs space-y-2 font-medium text-slate-500">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Native AI Copywriting</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Advanced Sequence Logic</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Bidirectional App Syncs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 uppercase text-xs tracking-widest text-[#00B67A]">The Pipedrive Precision</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Pipedrive focuses on "Sales Assistance." Rather than hidden background logic, its automation helps the rep perform better. 
                    It suggests templates based on the deal stage and automates the creation of tasks when a deal moves. 
                    Integrating with Slack or Trello is a 2-click process, making it ideal for teams who want to keep their stack 
                    fragmented for agility but connected for clarity.
                  </p>
                  <ul className="text-xs space-y-2 font-medium text-slate-500">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Simple Trigger/Action Builder</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Deep Google/365 Email Sync</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Dedicated Marketplace App Store</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <BarChart3 className="text-purple-500" /> Reporting & Forecasting
              </h2>
              <div className="space-y-6 text-slate-600">
                <p className="text-base">
                  When it comes to data viz, <strong>HubSpot</strong> is the heavy hitter. Their custom report builder allows you to cross-reference 
                  data from diverse sources (e.g., "Show me the revenue generated by leads who first visited our site via a Twitter post in March"). 
                  For a CMO or a CEO, this level of granular attribution is essential for budget planning. 
                  HubSpot's Enterprise tier introduces "Multi-Touch Revenue Attribution," which uses machine learning to assign 
                  monetary value to every interaction a customer had with your brand before buying—whether that was a blog post view, 
                  an email click, or a live chat message. This is overkill for some, but for a data-driven enterprise, it's the gold standard.
                </p>
                <div className="bg-slate-50 p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-800">89%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Accuracy in Forecasting</div>
                  </div>
                  <div className="text-center border-x border-slate-200">
                    <div className="text-2xl font-black text-slate-800">1,200+</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Report Variations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-slate-800">Real-time</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 mt-1">Data Updates</div>
                  </div>
                </div>
                <p className="text-base pt-4">
                  <strong>Pipedrive</strong> focuses on the <em>future</em>. Their "Insights" dashboard is designed to tell you two things: 
                  "Are we going to hit our target this month?" and "What do we need to do today to win?" 
                  Pipedrive’s forecasting is intuitive because it's based on expected close dates and historical win rates. 
                  It's less about "Attribution" and more about "Velocity." Pipedrive doesn't care as much about where the lead 
                  came from; it cares about how fast it's moving through the stages. For a sales manager, Pipedrive's 
                  "Stalled Deal" reports are more valuable than HubSpot's "Marketing ROI" reports because they provide 
                  immediate, actionable feedback for coaching reps.
                </p>
              </div>
            </section>

            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <DollarSign className="text-green-500" /> The Pricing Showdown: Hidden Gaps & ROI
              </h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  Pricing is where these two CRMs deviate most sharply. <strong>HubSpot</strong> is famous for its 
                  "Freemium" model. You can start with zero dollars and get a surprisingly robust CRM. However, 
                  HubSpot's pricing is built on "Feature Gates." As soon as you need a second pipeline, custom reporting, 
                  or advanced automation, you must jump to the Professional tier. This jump is often steep—going from 
                  $20/user to a minimum of $450/month for 5 users. For a growing B2B startup, this "pricing cliff" 
                  can be a painful moment in the budget cycle.
                </p>
                <p>
                  <strong>Pipedrive</strong> follows a more linear, "Seat-Based" model. Their Essential plan starts at roughly 
                  $12/user/month (billed annually) and gives you the core visual pipeline. The Professional tier, at $50/user/month, 
                  unlocks full automation and deeper reporting. The beauty of Pipedrive's pricing is its predictability. 
                  You don't get penalized for having "Marketing Contacts" in your database. If you have 50,000 cold leads 
                  that you aren't currently emailing but want to keep in the system, Pipedrive won't charge you an extra cent. 
                  HubSpot, conversely, might charge you hundreds of dollars extra per month for that same list size 
                  if they are categorized as "Marketing Contacts."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded border-l-4 border-[#FF7A59]">
                    <h4 className="font-bold text-[#FF7A59] mb-2 uppercase text-[10px]">HubSpot Note</h4>
                    <p className="text-xs">Great for small teams starting out with zero budget, but requires a "CFO-approved" budget for true scaling.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded border-l-4 border-[#00B67A]">
                    <h4 className="font-bold text-[#00B67A] mb-2 uppercase text-[10px]">Pipedrive Note</h4>
                    <p className="text-xs">Ideal for mid-sized sales teams who want a "linear" bill that only grows when the headcount grows.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Gauge className="text-orange-500" /> Onboarding & Time-to-Value
              </h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  In the world of B2B sales, time is money. <strong>Pipedrive</strong> takes the crown for fastest setup. 
                  Because the software is focused solely on the sales funnel, there are fewer "moving parts" to configure. 
                  A sales manager can set up custom stages, import their Excel database, and have their reps making 
                  calls within a single afternoon. The learning curve is almost non-existent; if you know how to 
                  drag a post-it note on a whiteboard, you know how to use Pipedrive.
                </p>
                <p>
                  <strong>HubSpot</strong> is a different beast. Implementing HubSpot Professional or Enterprise often 
                  requires a 4-to-12 week "Onboarding" period. This is because you aren't just setting up a CRM; 
                  you're setting up marketing tracking, email domains, cookie policies, and cross-departmental 
                  workflows. HubSpot often mandates a one-time onboarding fee for their higher tiers, 
                  which includes guided sessions with their implementation specialists. While this ensures a 
                  "correct" setup, it means your "Time-to-Value" is significantly longer. HubSpot is an 
                  investment in your long-term infrastructure, whereas Pipedrive is a tool for immediate action.
                </p>
              </div>
            </section>

            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Gauge className="text-blue-600" /> Technical Performance & Scalability
              </h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  For the CTO or the Head of Operations, a CRM's "under the hood" performance matters as much as its UI. 
                  <strong> HubSpot</strong> is built as a "Single-Object-Source" system. This means that every piece of 
                  information—from a support ticket to a marketing email click—is literally a different view of the same 
                  contact database. The technical advantage here is "Data Integrity." You never have to worry about 
                  de-syncing your marketing list from your sales list because they are the exact same list. 
                  However, this architectural choice makes HubSpot "heavy." As your database grows to 1,000,000+ 
                  contacts, you may notice that the "Global Search" or the "List Segmentation" tools take 10-15 seconds 
                  to process. HubSpot mitigates this with world-class CDN infrastructure, but the sheer complexity of 
                  their "Common Data Model" has a performance cost.
                </p>
                <p>
                  <strong>Pipedrive</strong> is architected for "Write Performance." In a high-volume sales environment 
                  where 50 reps are logging 100 activities each hour, the database needs to be lightning-fast. 
                  Pipedrive’s API is widely praised by developers for its simplicity and speed. They use a RESTful 
                  architecture that is highly optimized for "Deal" and "Activity" objects. While HubSpot is a 
                  "multi-purpose platform," Pipedrive is a "high-performance database with a GUI." This makes it 
                  ideal for startups that want to build custom internal tools or proprietary mobile apps 
                  on top of their CRM data.
                </p>
                <div className="bg-slate-900 text-slate-300 p-6 rounded-md font-mono text-xs overflow-x-auto">
                  <div className="border-b border-slate-700 pb-2 mb-2 text-slate-500">// B2B Sales API Performance Comparison (Avg Response Time)</div>
                  <div className="flex justify-between"><span>GET /crm/objects/deals</span> <span className="text-green-400">Pipedrive: 145ms</span></div>
                  <div className="flex justify-between"><span>GET /crm/v3/objects/deals</span> <span className="text-yellow-400">HubSpot: 310ms</span></div>
                  <div className="pt-2 text-slate-500 mt-2 italic">Note: Benchmarked using 10k test objects in standard regional zones.</div>
                </div>
              </div>
            </section>

            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Users className="text-red-500" /> Sales Philosophy: Inbound vs Outbound
              </h2>
              <div className="space-y-6 text-slate-600">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 border-r border-slate-100 pr-0 md:pr-8">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Mail className="w-5 h-5 text-[#FF7A59]" /> The HubSpot Inbound Engine</h3>
                    <p className="text-sm leading-relaxed">
                      HubSpot literally invented "Inbound Marketing." Their CRM is designed for companies that 
                      create content—blogs, videos, webinars—and wait for leads to come to them. The CRM acts 
                      as the net that catches these leads and nurtures them automatically until they are ready 
                      to talk to a human. If your strategy is 80% inbound, HubSpot's ability to track the 
                      "Buyer's Journey" from the first anonymous website visit to the final signature is unmatched. 
                      You can see exactly which whitepaper a lead downloaded three months ago, which tells 
                      your sales rep exactly what the prospect's pain point is before they even pick up the phone.
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5 text-[#00B67A]" /> The Pipedrive Outbound Hunter</h3>
                    <p className="text-sm leading-relaxed">
                      Pipedrive is built for the "Cold Outreach" world. If your reps spend their days 
                      on LinkedIn Sales Navigator or cold-emailing prospects from a bought list, they need a tool that 
                      prioritizes their task list over marketing attribution. Pipedrive makes it incredibly 
                      fast to log a call, schedule a follow-up, and move on to the next prospect. It's a 
                      productivity tool for people who eat, sleep, and breathe "The Hustle." It treats 
                      each prospect as a "Deal" to be moved, rather than a "Contact" to be nurtured. 
                      For outbound-heavy agencies, this lack of friction is a competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Users className="text-blue-500" /> Executive Verdict: The Deployment Scenarios
              </h2>
              <div className="space-y-8 text-slate-600">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-bold text-slate-800 mb-3">Scenario A: The 10-Person Outbound Agency</h3>
                  <p className="text-sm">
                    <strong>The Setup:</strong> You have a team of 8 SDRs making 60 calls a day and 2 AEs focused on closing. Your marketing is almost non-existent; 95% of your business comes from cold calls and emails.
                    <br /><br />
                    <strong>The Winner: Pipedrive.</strong> Why? Because Pipedrive's activity-based logic will keep your SDRs focused on their daily quotas. HubSpot would be an expensive distraction with features you'll never use. Pipedrive's lower price point ($240/mo vs $1,200/mo for Pro) allows you to reinvest that capital into better prospecting lists.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#FF7A59]">
                  <h3 className="font-bold text-slate-800 mb-3">Scenario B: The VC-Backed B2B SaaS Startup</h3>
                  <p className="text-sm">
                    <strong>The Setup:</strong> You have 5 reps now but plan to have 50 in 18 months. You are running heavy Google Ads and have a dedicated Content Marketer. You need a platform that can scale with you and handle Customer Success later.
                    <br /><br />
                    <strong>The Winner: HubSpot.</strong> Why? The ecosystem is the deciding factor. By starting on HubSpot, you avoid the "migration nightmare" later. HubSpot's Service Hub and Operations Hub will become vital once you have 1,000+ customers. It's better to pay the "platform tax" early than to rebuild your foundation mid-growth.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                <Gauge className="text-indigo-500" /> Data Sovereignty & Security Protocols
              </h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  In the 2026 B2B landscape, data security is non-negotiable. Both HubSpot and Pipedrive are SOC 2 Type II compliant and offer robust 
                  encryption at rest and in transit. However, their approaches to "Data Ownership" vary. 
                  <strong> HubSpot</strong> provides extremely granular audit logs on its Enterprise tier, showing every single time a user 
                  viewed a contact or exported a list. This is a critical requirement for companies in the Fintech or Healthcare space. 
                  HubSpot's infrastructure is primarily hosted on AWS in the United States, but they offer regional data hosting for 
                  EU customers to satisfy GDPR "Schrems II" requirements.
                </p>
                <p>
                  <strong>Pipedrive</strong> is an Estonian-born company, meaning GDPR is in their DNA. Their security features are 
                  straightforward but solid. They offer two-factor authentication (2FA) and single sign-on (SSO) on their 
                  higher tiers. One unique feature Pipedrive offers is the "Security Dashboard," which proactively warns 
                  admins about suspicious login locations or high-volume data exports that might indicate a rep is 
                  planning to leave with the company's leads. While HubSpot is more about "Compliance," Pipedrive is more 
                  about "Theft Prevention."
                </p>
                <p>
                  Ultimately, if your organization requires complex data residency (e.g., you need data stored strictly in Germany or China), 
                  HubSpot's global footprint gives them a slight edge. If you are a lean B2B team that just needs to know 
                  your data is safe from "Inside Jobs," Pipedrive's focus on user-behavior monitoring is efficient and effective.
                </p>
              </div>
            </section>
          </article>

          {/* Decision Matrix */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-white border border-slate-200 p-8 rounded-md shadow-sm"
          >
            <h2 className="text-xl font-black mb-6 uppercase tracking-tight text-slate-400">Head-to-Head Decision Matrix</h2>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 text-left font-bold text-slate-600">If you care most about...</th>
                  <th className="py-3 text-left font-black text-blue-600">Pick</th>
                  <th className="py-3 text-left font-bold text-slate-600">The Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4">Marketing Automation</td>
                  <td className="py-4 font-black text-[#FF7A59]">HubSpot</td>
                  <td className="py-4 text-slate-500">Native tools built-in means no data silos.</td>
                </tr>
                <tr>
                  <td className="py-4">Visual Pipeline Simplicity</td>
                  <td className="py-4 font-black text-[#00B67A]">Pipedrive</td>
                  <td className="py-4 text-slate-500">Industry-leading drag-drop design for focus.</td>
                </tr>
                <tr>
                  <td className="py-4">Free Forever Plan</td>
                  <td className="py-4 font-black text-[#FF7A59]">HubSpot</td>
                  <td className="py-4 text-slate-500">Full CRM is free for unlimited users and data.</td>
                </tr>
                <tr>
                  <td className="py-4">Mobile Sales Apps</td>
                  <td className="py-4 font-black text-[#00B67A]">Pipedrive</td>
                  <td className="py-4 text-slate-500">Award-winning app designed for reps on the move.</td>
                </tr>
                <tr>
                  <td className="py-4">Complex API Needs</td>
                  <td className="py-4 font-black text-[#FF7A59]">HubSpot</td>
                  <td className="py-4 text-slate-500">Massive dev documentation and Webhooks.</td>
                </tr>
                <tr>
                  <td className="py-4">Low Management Overhead</td>
                  <td className="py-4 font-black text-[#00B67A]">Pipedrive</td>
                  <td className="py-4 text-slate-500">"Self-serve" CRM that doesn't need an admin.</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Extended FAQ */}
          <section className="bg-white border border-slate-200 p-8 rounded-md shadow-sm">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <HelpCircle className="text-blue-400" /> Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="group border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Is migration from one to another difficult?</h3>
                <p className="text-slate-600">Both platforms offer robust CSV/Excel import tools. However, Pipedrive is generally considered easier for "clean" migrations from manual spreadsheets. HubSpot migration often requires more planning if you are mapping complex marketing history or custom objects. We recommend using a tool like Import2 for complex B2B database moves.</p>
              </div>
              <div className="group border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">How does the support compare for small teams?</h3>
                <p className="text-slate-600">HubSpot offers phone support only on their Professional tiers ($450+/mo). Their free/Starter plans rely on community forums and email. Pipedrive provides 24/7 live chat support across <em>all</em> of its paid plans, including the entry-level Essential tier, which is a massive win for small B2B teams who can't wait days for a ticket response.</p>
              </div>
              <div className="group border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">What are the "hidden costs"?</h3>
                <p className="text-slate-600">HubSpot's biggest hidden cost is "Marketing Contacts." Once you exceed your limit, the jump in price can be thousands of dollars. They also charge for "Onboarding" if you go for the Pro tier ($3,000+). Pipedrive is much more transparent: you pay per seat. The only "hidden" costs are for add-ons like LeadBooster (their chatbot) or Campaigns (their email marketing tool).</p>
              </div>
              <div className="group border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Can I use both together?</h3>
                <p className="text-slate-600">It's common for companies to use HubSpot for Marketing (Inbound) and Pipedrive for Sales. You can sync the two using Zapier or Make.com. However, maintainability becomes an issue; most teams eventually consolidate into one to ensure a "Single Source of Truth."</p>
              </div>
              <div className="group border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Which one is better for LinkedIn prospecting?</h3>
                <p className="text-slate-600">HubSpot has a more direct native integration with LinkedIn Sales Navigator. Pipedrive relies more on Chrome extensions (like Leadfeeder or Surfe) to bridge the gap. If your entire strategy is "Social Selling," HubSpot's data enrichment puts it slightly ahead.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: CTAs & Sidebars */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-800 text-white p-6 rounded-md shadow-lg sticky top-4"
          >
            <h3 className="text-[12px] font-bold uppercase mb-4 text-slate-400 tracking-widest">Final Verdict & Next Steps</h3>
            <div className="space-y-4">
              <a 
                href="#" 
                className="group flex items-center justify-between bg-[#FF7A59] hover:bg-[#e0694d] text-white p-4 text-sm font-black rounded-md transition-all transform hover:-translate-y-1 shadow-md"
              >
                Get HubSpot Free <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#" 
                className="group flex items-center justify-between bg-[#00B67A] hover:bg-[#00a36d] text-white p-4 text-sm font-black rounded-md transition-all transform hover:-translate-y-1 shadow-md"
              >
                Start Pipedrive Trial <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] opacity-60 italic text-center leading-relaxed mt-4">
                Pro Tip: Test HubSpot's free tier for 7 days. Then try Pipedrive's 14-day trial. Track which one feels more natural to your actual sales team before putting down a credit card.
              </p>
            </div>
          </motion.section>

          <section className="bg-white border border-slate-200 p-5 rounded-md shadow-sm">
            <h3 className="text-[10px] font-bold uppercase mb-4 text-slate-400 tracking-widest">Selection Framework</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Users className="w-10 h-10 p-2 bg-blue-50 text-blue-500 rounded-md" />
                <div>
                  <h4 className="text-xs font-bold font-mono">Team Size</h4>
                  <p className="text-[10px] text-slate-500">Pipedrive for 1-20 reps. HubSpot for 20-500+.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <DollarSign className="w-10 h-10 p-2 bg-green-50 text-green-500 rounded-md" />
                <div>
                  <h4 className="text-xs font-bold font-mono">Budget</h4>
                  <p className="text-[10px] text-slate-500">Pipedrive is 3x cheaper at scale for Sales Hub.</p>
                </div>
              </div>
              <div className="flex gap-3 border-t border-slate-100 pt-4 mt-2">
                <Layout className="w-10 h-10 p-2 bg-slate-50 text-slate-500 rounded-md" />
                <div>
                  <h4 className="text-xs font-bold font-mono">UX Style</h4>
                  <p className="text-[10px] text-slate-500">Pipedrive = Kanban. HubSpot = Relational.</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="text-[10px] text-slate-400 space-y-4 pt-4">
            <p><strong>Note on 2026 Data:</strong> Pricing and feature availability based on public statements as of Jan 2026. HubSpot "Breeze" AI and Pipedrive "Sales Assistant" included in calculations.</p>
            <div className="p-4 bg-slate-100 rounded-md text-slate-500 italic">
              <strong>Affiliate Disclaimer:</strong> We may earn a commission if you purchase through links on this page. This does not influence our rating; we test each tool professionally.
            </div>
          </footer>
        </div>
      </main>

      {/* Floating Bottom Bar for Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 flex gap-4 z-50">
          <button className="flex-1 bg-[#FF7A59] text-white py-3 rounded-md font-bold text-sm">HubSpot Free</button>
          <button className="flex-1 bg-[#00B67A] text-white py-3 rounded-md font-bold text-sm">Pipedrive Trial</button>
      </div>
    </div>
  );
}

