# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
The Facilities table is assumed (based on the give information) to have at least the following fields:
id (primary key and auto increment), agent_id (foreign key), facility_name ...

The Agent table is assumed to have the following minimum fields:
id(primary key and auto increment), agent_name

The Shift table is expected to have the following minimum fields:
id(primary key and auto increment), facility_id (foreign key), day (Monday-Sunday), date(mm-dd-yyy), shift (morning/afternoon/night)...

The function getShiftsByFacility() will serve as the model that executes the following query:
SELECT facility_name, agent_name, s.date, day, shift FROM Shifts as s 
INNERJOIN Facilities as f ON s.facility_id=f.id 
INNERJOIN Agent as a ON a.id=f.agent_id
WHERE date BETWEEN 'start_date' AND 'end-date' order by s.date, facility_id, agent_id;

Note: I used (*) to select all bcos a few number of fields are in the tables. It will be more efficient to specify the desired fields when many fields are present in the tables.

The generateReport function will invoke the getShiftsByFacility() to render the model
Different JavaScript libraries such as jsPDF Library can be used to convert html report to pdf
Different smtp libraries can also be employed to send mail such as SmtpJS. Importing nodemailer module will also be a good alternative for sending mail.

**Time/Effort estimate for the ticket implementation is 16hours to including unit testing.



