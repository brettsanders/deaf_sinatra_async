get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  # "Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
  if params[:user_input] == params[:user_input].downcase
    @grandma = 'SPEAK UP SONNY!'
  else
    @grandma = 'NO NOT SINCE 1983!'
  end
  erb :index, layout: !request.xhr?
end
