# Contest_calender
A code repo for Contest Calender Extension
---

# Upcoming Contests Display

This project displays upcoming programming contests from Codeforces, CodeChef, and LeetCode on a webpage. The contests are fetched from the [CLIST API](https://clist.by/) and sorted by their start dates.

## Features

- Fetches upcoming contests from Codeforces, CodeChef, and LeetCode.
- Displays contest details including event name, start time, and a link to the contest.
- Shows logos for each contest platform.
- Handles errors and displays appropriate messages.

## Setup

1. Open the `index.html` file in your favorite code editor.

2. Replace the `resourceLogos` paths with the actual paths to your logo images.

3. Open the `index.html` file in a web browser to see the upcoming contests.

## Usage

- The script fetches upcoming contests using the CLIST API.
- It requires a valid `username` and `apiKey` for authentication with the CLIST API.
- The contests are displayed in a sorted order by start date.

## Code Explanation

- `index.html`: Contains the basic HTML structure and a container for displaying contests.
- `script.js`: Fetches and displays the contests.
  - Fetches contest data from the CLIST API.
  - Sorts contests by start date.
  - Dynamically creates and appends HTML elements to display contest details.
  - Handles errors and displays appropriate messages.

## Example

Here's an example of how the contests are displayed:

- Event: Codeforces Round #123
- Start Time: 2024-06-25 18:00:00
- [Go to Contest](https://codeforces.com/contest/123)

## Dependencies

- None. This project uses plain HTML, CSS, and JavaScript.

---
