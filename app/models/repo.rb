class Repo < ActiveRecord::Base
  belongs_to :user

  # def submit_issues!
  #   return if self.generated
  #
  #   issues.each do |title, description|
  #     user.github.create_issue(name, title, description)
  #   end
  #
  #   self.generated = true
  #   self.save!
  # end
  #
  # def issues
  #   {
  #     "custom domain" => "Use your own custom domain (no herokuapps.com subdomain)",
  #     "guest account" => "Have a guest account (or two, if you need both to demo)",
  #     "good seed data" => "Have well groomed seed data (real world stuff, no lorem ipsum)",
  #     "prefill forms" => "Have buttons to fill out complex forms while demoing (with nice seed data)",
  #     "homepage at root" => "Have a root homepage",
  #     "homepage description" => "Have a one to three sentences statement on your homepage describing your app ('A Tumblr clone', 'A Rap Genius clone to annotate dolphin sounds' etc. Make it painfully obvious what your app does at first glance. You do not have to be witty. Use a big font size. This will look cool and be clear to employers with squirrel attention spans.)",
  #     "visual feedback" => "It is very important when demoing your app that when you do actions, like save, befriend, delete, modify, etc. something visually happens on the page to acknowledge the action. This is important user feedback and is crucial for any serious web app.",
  #     "flash notifications" => "Add flash messages to acknowledge saves, etc.",
  #     "style hovers" => "Style :hover actions of input, buttons and links, to show you can click on things. More visual feedback!",
  #     "style everything" => "Don't have any unstyled pages, no matter how insignificant.",
  #     "consistent style" => "It is more important to have a consistent design applied everywhere, however minimal, than something fancy here and there, and others painfully untouched.",
  #     "style form controls" => "Style your input, textarea and button tags (use the same size font, color, etc. as the rest of your app, else they stick out like a sore thumb)",
  #     "big font" => "Make your overall text size big",
  #     "emphasize features" => "Add helpful tips of a sentence here and there on the spot in your app to guide the user through your app. This makes your implemented features extra obvious.",
  #     "peer review" => "Ask another student to walk through your app, give them instructions beforehand, and watch them do this on their own, without help. See where they struggle to understand features. Return this favor!",
  #     "fix up readme" => "Write a killer README covering concept, features, technologies and a bunch of future todos (even if it's unlikely you'll ever do it, it shows that you have thought about better ways to implement features, etc.)"
  #   }
  # end
end
